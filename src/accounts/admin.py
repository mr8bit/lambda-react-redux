# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin

from accounts.models import User, SocialNetwork


# Register your models here.


class BookInline(admin.TabularInline):
    model = SocialNetwork

class UserAdmin(admin.ModelAdmin):
    model = User
    inlines = (
        BookInline,
    )

admin.site.register(User, UserAdmin)