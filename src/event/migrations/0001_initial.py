# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-04-24 18:33
from __future__ import unicode_literals

import ckeditor.fields
import colorfield.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
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
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('type', models.CharField(max_length=3, verbose_name='Тип')),
                ('creation_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('image', models.ImageField(default='', upload_to='', verbose_name='Изображение')),
                ('internet_available', models.CharField(choices=[('Есть', 'Есть'), ('Может есть', 'Может есть'), ('Может есть, а может нет', 'Может есть, а может нет'), ('Ну такое', 'Ну такое'), ('Скорее да, чем нет', 'Скорее да, чем нет'), ('Скорее нет, чем да', 'Скорее нет, чем да'), ('Нет', 'Нет')], default=True, max_length=300, verbose_name='Есть доступ к интернету')),
                ('take_computer', models.CharField(choices=[('Да', 'Да'), ('Может понадобиться', 'Может понадобиться'), ('Нет', 'Нет')], default=True, max_length=300, verbose_name='Брать компьютер')),
                ('description', ckeditor.fields.RichTextField(default='', verbose_name='Статья')),
                ('start', models.DateTimeField(blank=True, null=True, verbose_name='Начало')),
                ('end', models.DateTimeField(blank=True, null=True, verbose_name='Окончание')),
                ('value', models.CharField(default='Бесплатно', max_length=300, verbose_name='Стоимость')),
                ('place', models.CharField(default='', max_length=300, verbose_name='Место')),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('category', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='event.Category', verbose_name='Категория')),
            ],
        ),
    ]
