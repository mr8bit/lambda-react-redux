# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-02-25 21:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0006_auto_20180225_2051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='internet_available',
            field=models.CharField(choices=[('yes', 'Есть'), ('may', 'Может есть'), ('may', 'Может есть, а может нет'), ('may', 'Ну такое'), ('may', 'Скорее да, чем нет'), ('may', 'Скорее нет, чем да'), ('no', 'Нет')], default=True, max_length=300, verbose_name='Есть доступ к интернету'),
        ),
        migrations.AlterField(
            model_name='event',
            name='take_computer',
            field=models.CharField(choices=[('yes', 'Да'), ('may', 'Может понадобиться'), ('no', 'Нет')], default=True, max_length=300, verbose_name='Брать компьютер'),
        ),
    ]
