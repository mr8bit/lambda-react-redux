from django.db.models.signals import post_save, post_delete, pre_save
from .models import *
from django.conf import settings

from django.dispatch import receiver

from PIL import Image, ImageDraw, ImageFont


def get_absolute_image_url(image):
    return "{0}{1}".format(settings.BASE_DIR, image.url)


def resize_image(image_path):
    image = Image.open(image_path)
    image_size_width, image_size_heigth = image.size
    new_wdith = 1110
    koef_for_resize = new_wdith / image_size_width
    image_size_width = int(image_size_width * koef_for_resize)
    image_size_heigth = int(image_size_heigth * koef_for_resize)
    image = image.resize((image_size_width, image_size_heigth), Image.ANTIALIAS)
    save_image_path = '{0}_main.jpg'.format(image_path.split('.')[0])
    image.save(save_image_path, optimize=True, quality=90)


def create_thumbnail(instance, image_path):
    print(image_path)
    thumb = Image.open(image_path)
    if instance.type == 'mid':
        thumb.thumbnail((480, 320))
    else:
        thumb.thumbnail((600, 480))
    thunmbnail_path = image_path.split('.')[0]
    thunmbnail_path = "{0}_thumbnail.jpg".format(thunmbnail_path)
    thumb.save(thunmbnail_path, optimize=True, quality=90)


def handler_that_saves_a_mymodel_instance(sender, instance, created, **kwargs):
    post_save.disconnect(handler_that_saves_a_mymodel_instance, sender=sender)
    image_path = get_absolute_image_url(instance.image)
    create_thumbnail(instance, image_path)
    thunmbnail_path = instance.image.url.split('/media/')[1].split('.')[0]
    thunmbnail_path = "{0}_thumbnail.jpg".format(thunmbnail_path)
    instance.thumbnail = thunmbnail_path

    resize_image(image_path)
    image_path = instance.image.url.split('/media/')[1].split('.')[0]
    image_path = "{0}_main.jpg".format(image_path)
    instance.image = image_path
    instance.save()
    post_save.connect(handler_that_saves_a_mymodel_instance, sender=sender)
