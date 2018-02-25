import locale
from colorfield.fields import ColorField
from django.db import models
from django.conf import settings
from ckeditor.fields import RichTextField


class Category(models.Model):
    title = models.CharField(verbose_name="Название", max_length=120)
    color = ColorField(verbose_name="Цвет", default='#FF0000')

    def __str__(self):
        return self.title


TYPE_CHOICES = (
    ('Да', "Да"),
    ('Может понадобиться', "Может понадобиться"),
    ('Нет', "Нет"),
)

INTERNET_CHOICES = (
    ("Есть", "Есть"),
    ("Может есть", "Может есть"),
    ("Может есть, а может нет", "Может есть, а может нет"),
    ("Ну такое", "Ну такое"),
    ("Скорее да, чем нет", "Скорее да, чем нет"),
    ("Скорее нет, чем да", "Скорее нет, чем да"),
    ("Нет", "Нет"),
)


class Event(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    type = models.CharField(max_length=3, verbose_name='Тип')
    creation_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    image = models.ImageField(verbose_name='Изображение', default='')
    category = models.ForeignKey(Category, verbose_name="Категория", default=1)
    internet_available = models.CharField(choices=INTERNET_CHOICES, max_length=300,
                                          verbose_name="Есть доступ к интернету", default=True)
    take_computer = models.CharField(choices=TYPE_CHOICES, max_length=300, verbose_name="Брать компьютер", default=True)
    description = RichTextField(verbose_name="Статья", default='')
    start = models.DateTimeField(verbose_name="Начало", blank=True, null=True)
    end = models.DateTimeField(verbose_name="Окончание", blank=True, null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name="Автор", null=True, blank=True)
    value = models.CharField(verbose_name="Стоимость", max_length=300, default="Бесплатно")
    place = models.CharField(verbose_name="Место", max_length=300, default='')

    def getCategory(self):
        return {
            'title': self.category.title,
            'color': self.category.color
        }

    def getTimeEvent(self):
        time = (abs(self.end - self.start)).seconds
        time = int(time / 60)
        return "{0} мин.".format(time)

    def getDateCreate(self):
        locale.setlocale(locale.LC_ALL, 'ru_RU.UTF-8')
        return self.creation_date.strftime("%d %B, %H:%M")

    def __str__(self):
        return self.title
