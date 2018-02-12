import locale

from django.db import models


# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    type = models.CharField(max_length=3, verbose_name='Тип')
    creation_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    image = models.ImageField(verbose_name='Изображение', default='')

    def getDateCreate(self):
        locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
        return self.creation_date.strftime("%d %b %H:%M")
