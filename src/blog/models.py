# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField
from django.db import models
from colorfield.fields import ColorField
import datetime
import locale
from django.conf import settings

from django.db.models.signals import post_save, post_delete

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
    title = models.CharField(max_length=120, verbose_name='Навзвание ')
    category = models.ForeignKey('Category', default=1)
    type = models.CharField(choices=TYPE_CHOICES, default='mid', verbose_name='Тип', max_length=4)
    slug = models.SlugField()
    description = RichTextField(verbose_name="Статья")
    short_description = models.TextField(verbose_name="Короткое описание", default='')
    image = models.ImageField(verbose_name='Изображение', default='')
    size = models.IntegerField(verbose_name="Размер", choices=SIZE_CHOICES, default=25)
    creation_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор", null=True, blank=True)
    tags = TaggableManager()
    page = models.IntegerField(verbose_name='Страница', default=0)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Статья"

    def getCategory(self):
        return {
            'name': self.category.name,
            'color': self.category.color
        }

    def getDateCreate(self):
        locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
        return self.creation_date.strftime("%d %b %H:%M")

def sort_articles(**kwargs):
    articles = Article.objects.order_by('-creation_date')
    page = 1
    while articles:
        line1 = get_line(articles)
        line2 = get_line(articles)
        for item in line1 + line2:
            item.page = page
            item.save['page']
        page += 1


def get_line(articles):
    small_count = 0
    for item in articles:
        if item.size == 25:
            small_count += 1
    while size < 100:
        i = 0
        l = len(articles)
        while not fit_into_line(articles[i].size, size, small_count, l):
            i += 1
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


post_save.connect(sort_articles)
post_delete.connect(sort_articles)
# do sorting once on app start
sort_articles()