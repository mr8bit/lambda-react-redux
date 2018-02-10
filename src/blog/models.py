# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from ckeditor.fields import RichTextField
from django.db import models


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=120, verbose_name='Навзвание ')
    slug = models.SlugField()
    description = RichTextField(verbose_name="Статья")
    image = models.ImageField(verbose_name='Изображение', default='')

    class Meta:
        verbose_name = "Статья"
