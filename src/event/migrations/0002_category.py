# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-02-14 13:27
from __future__ import unicode_literals

import colorfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120, verbose_name='Название')),
                ('color', colorfield.fields.ColorField(default='#FF0000', max_length=18, verbose_name='Цвет')),
            ],
        ),
    ]
