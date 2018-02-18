# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from taggit.managers import TaggableManager
from ckeditor.fields import RichTextField
from django.db import models
from colorfield.fields import ColorField
import datetime
import locale
from django.conf import settings


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


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=120, verbose_name='Навзвание ')
    category = models.ForeignKey('Category', default=1)
    type = models.CharField(choices=TYPE_CHOICES, default='mid', verbose_name='Тип', max_length=4)
    slug = models.SlugField()
    description = RichTextField(verbose_name="Статья")
    image = models.ImageField(verbose_name='Изображение', default='')
    creation_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор", null=True, blank=True)
    tags = TaggableManager()

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
