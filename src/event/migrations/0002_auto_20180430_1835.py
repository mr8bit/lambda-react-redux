# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-04-30 18:35
from __future__ import unicode_literals

from django.db import migrations, models
import event.models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(default='', upload_to=event.models.Event.get_file_path, verbose_name='Изображение'),
        ),
    ]