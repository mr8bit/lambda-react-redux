import locale

from colorfield.fields import ColorField
from django.db import models


class Category(models.Model):
    title = models.CharField(verbose_name="Название", max_length=120)
    color = ColorField(verbose_name="Цвет", default='#FF0000')

    def __str__(self):
        return self.title


# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    type = models.CharField(max_length=3, verbose_name='Тип')
    creation_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    image = models.ImageField(verbose_name='Изображение', default='')
    category = models.ForeignKey(Category, verbose_name="Категория", default=1)

    def getDateCreate(self):
        locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
        return self.creation_date.strftime("%d %b %H:%M")

    def __str__(self):
        return self.title
