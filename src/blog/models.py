# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField
from django.db import models
from colorfield.fields import ColorField
import datetime
import locale
from django.conf import settings
from django.db.models.signals import post_save, post_delete, pre_save
import hashlib
from django.conf import settings

from django.dispatch import receiver

from django.db.models.signals import post_save, post_delete, pre_save
from django.conf import settings
import hashlib
from django.dispatch import receiver

from PIL import Image, ImageDraw, ImageFont


class Category(models.Model):
    name = models.CharField(max_length=120, verbose_name='Название')
    slug = models.SlugField()
    color = ColorField(default='#FF0000')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категория"


TYPE_CHOICES = (
    ('main', "Главная"),
    ('mid', "Средняя"),
    ('big', "Большая"),
    ('mini', "Маленькая"),
)

SIZE_CHOICES = (
    (50, "Большая"),
    (25, "Средняя"),
)


# Create your models here.
class Article(models.Model):
    def get_file_path(instance, filename):
        return '{0}/{1}/{2}.jpg'.format('article', instance.slug, filename)

    title = models.CharField(max_length=120, verbose_name='Навзвание ')
    category = models.ForeignKey('Category', default=1)
    type = models.CharField(choices=TYPE_CHOICES, default='mid', verbose_name='Тип', max_length=4)
    slug = models.SlugField()
    description = RichTextField(verbose_name="Статья")
    short_description = models.TextField(verbose_name="Короткое описание", default='')
    image = models.ImageField(verbose_name='Изображение', default='', upload_to=get_file_path)
    size = models.IntegerField(verbose_name="Размер", choices=SIZE_CHOICES, default=25)
    creation_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор", null=True, blank=True)
    tags = TaggableManager()
    page = models.IntegerField(verbose_name='Страница', default=0)
    thumbnail = models.ImageField(max_length=255, default=0, blank=True, null=True)
    hash = models.CharField(max_length=300, blank=True, null=True)
    line_num = models.IntegerField(verbose_name='Линия размещения', default=0)
    order_in_line = models.IntegerField(verbose_name='Порядок в линии', default=0)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Статья"
        ordering = ['-creation_date']

    def getCategory(self):
        return {
            'name': self.category.name,
            'color': self.category.color
        }

    def getDateCreate(self):
        locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
        return self.creation_date.strftime("%d %b %H:%M")


def get_absolute_image_url(image):
    return "{0}{1}".format(settings.BASE_DIR, image.url)


def resize_image(image_path):
    image = Image.open(image_path)
    image_size_width, image_size_heigth = image.size
    new_wdith = 1110
    koef_for_resize = new_wdith / image_size_width
    image_size_width = int(image_size_width * koef_for_resize)
    image_size_heigth = int(image_size_heigth * koef_for_resize)
    image = image.resize((image_size_width, image_size_heigth), Image.ANTIALIAS)
    save_image_path = '{0}_main.jpg'.format(image_path.split('.')[0])
    image.save(save_image_path, optimize=True, quality=90)
    image_hash = Image.open(save_image_path)
    new_hash = hashlib.md5(image_hash.tobytes()).hexdigest()

    return new_hash


def create_thumbnail(instance, image_path):
    print(image_path)
    thumb = Image.open(image_path)
    if instance.type == 'mid':
        thumb.thumbnail((480, 320))
    else:
        thumb.thumbnail((600, 480))
    thunmbnail_path = image_path.split('.')[0]
    thunmbnail_path = "{0}_thumbnail.jpg".format(thunmbnail_path)
    thumb.save(thunmbnail_path, optimize=True, quality=90)


def create_thumbnails(sender, instance, created, **kwargs):
    image_path = get_absolute_image_url(instance.image)
    im = Image.open(image_path)
    new_hash = hashlib.md5(im.tobytes()).hexdigest()
    if new_hash != instance.hash:
        post_save.disconnect(create_thumbnails, sender=sender)
        post_save.disconnect(sort_articles, sender=sender)
        create_thumbnail(instance, image_path)
        thumbnail_path = instance.image.url.split('/media/')[1].split('.')[0]
        thumbnail_path = "{0}_thumbnail.jpg".format(thumbnail_path)
        new_hashser = resize_image(image_path)
        image_path = instance.image.url.split('/media/')[1].split('.')[0]
        image_path = "{0}_main.jpg".format(image_path)
        instance.hash = new_hashser
        instance.thumbnail = thumbnail_path
        instance.image = image_path
        instance.save()
        post_save.connect(create_thumbnails, sender=sender)
        post_save.connect(sort_articles, sender=sender)
    else:
        pass


def sort_articles(sender, instance, created, **kwargs):
    post_save.disconnect(sort_articles, sender=sender)
    post_save.disconnect(create_thumbnails, sender=sender)
    articles = Article.objects.order_by('-creation_date')
    page = 1
    length = list(articles)
    while length:
        line1 = get_line(length)
        line2 = get_line(length)
        i = 0
        for item in line1:
            item.line_num = 0
            item.order_in_line = i
            item.page = page
            item.save()
            i += 1
        i = 0
        for item in line2:
            item.line_num = 1
            item.order_in_line = i
            item.page = page
            item.save()
            i += 1
        page += 1
        print(length)

    post_save.connect(sort_articles, sender=sender)
    post_save.connect(create_thumbnails, sender=sender)


def get_line(articles):
    small_count = 0
    for item in articles:
        if item.size == 25:
            small_count += 1
    size = 0
    line = []
    while size < 100 and len(articles) > 0:
        i = 0
        l = len(articles)
        while not fit_into_line(articles[i].size, size, small_count, l):
            i += 1
        size += articles[i].size
        line.append(articles.pop(i))
    return line


def fit_into_line(article_size, line_size, small_count, count_objects):
    if article_size + line_size > 100:
        return False
    # we should always return true if it's the last article in set
    if count_objects == 1:
        return True
    # we should not fit small article if it's the last one and line size is even
    if small_count == 1 and article_size == 25 and line_size % 2 == 0:
        return False
    if article_size == 25:
        small_count -= 1
    return True


post_save.connect(create_thumbnails, sender=Article)
post_save.connect(sort_articles, sender=Article)
