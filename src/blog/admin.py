# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin

from .models import *

# Register your models here.

admin.site.register(Category)


class ArticleAdmin(admin.ModelAdmin):
    model = Article
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Основное', {'fields': ('title', 'size','category', 'type', 'slug', 'image', 'author', 'tags')}),
        ('Описание', {'fields': ('description', 'short_description')}),
    )


admin.site.register(Article, ArticleAdmin)
