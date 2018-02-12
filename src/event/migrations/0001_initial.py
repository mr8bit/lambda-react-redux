# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-02-12 16:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('type', models.CharField(max_length=3, verbose_name='Тип')),
                ('creation_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('image', models.ImageField(default='', upload_to='', verbose_name='Изображение')),
            ],
        ),
    ]