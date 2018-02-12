# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-02-10 22:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_category_color'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='type',
            field=models.CharField(choices=[('main', 'Главная'), ('mid', 'Средняя'), ('big', 'Большая'), ('mini', 'Маленькая')], default='mid', max_length=4, verbose_name='Тип'),
        ),
    ]
