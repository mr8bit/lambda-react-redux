# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin


from accounts.models import User, SocialNetwork

# Register your models here.

admin.site.register(User)
admin.site.register(SocialNetwork)
