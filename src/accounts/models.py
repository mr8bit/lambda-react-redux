import uuid
from datetime import timedelta

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _


class MyUserManager(BaseUserManager):
    def _create_user(self, email, password, first_name, last_name, is_staff, is_superuser, **extra_fields):
        """
        Create and save an User with the given email, password, name and phone number.

        :param email: string
        :param password: string
        :param first_name: string
        :param last_name: string
        :param is_staff: boolean
        :param is_superuser: boolean
        :param extra_fields:
        :return: User
        """
        now = timezone.now()
        email = self.normalize_email(email)
        user = self.model(email=email,
                          first_name=first_name,
                          last_name=last_name,
                          is_staff=is_staff,
                          is_active=True,
                          is_superuser=is_superuser,
                          last_login=now,
                          date_joined=now, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, email, first_name, last_name, password, **extra_fields):
        """
        Create and save an User with the given email, password and name.

        :param email: string
        :param first_name: string
        :param last_name: string
        :param password: string
        :param extra_fields:
        :return: User
        """

        return self._create_user(email, password, first_name, last_name, is_staff=False, is_superuser=False,
                                 **extra_fields)

    def create_superuser(self, email, first_name='', last_name='', password=None, **extra_fields):
        """
        Create a super user.

        :param email: string
        :param first_name: string
        :param last_name: string
        :param password: string
        :param extra_fields:
        :return: User
        """
        return self._create_user(email, password, first_name, last_name, is_staff=True, is_superuser=True,
                                 **extra_fields)


class SocialNetwork(models.Model):
    name = models.CharField(_("Название"),max_length=300)
    url = models.URLField(_("Ссылка"), max_length=200)

class User(AbstractBaseUser):
    """
    Model that represents an user.

    To be active, the user must register and confirm his email.
    """

    GENDER_MALE = 'М'
    GENDER_FEMALE = 'Ж'
    GENDER_CHOICES = (
        (GENDER_MALE, 'Мужской'),
        (GENDER_FEMALE, 'Женский')
    )

    # we want primary key to be called id so need to ignore pytlint
    # В чем фича данного поля?
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)  # pylint: disable=invalid-name
    social_nework = models.ManyToManyField(SocialNetwork)
    first_name = models.CharField(_('Имя'), max_length=50)
    last_name = models.CharField(_('Фамилия'), max_length=50)
    email = models.EmailField(_('Почта'), unique=True)
    position = models.CharField(_('Должность'), max_length=300, default='Участник')

    image = models.ImageField(_("Фотография"), default='')



    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default=GENDER_MALE)

    confirmed_email = models.BooleanField(default=False)


    is_staff = models.BooleanField(_('staff status'), default=False)
    is_superuser = models.BooleanField(_('superuser status'), default=False)
    is_active = models.BooleanField(_('active'), default=True)

    date_joined = models.DateTimeField(_('Дата регистрации'), auto_now_add=True)
    date_updated = models.DateTimeField(_('date updated'), auto_now=True)

    activation_key = models.UUIDField(unique=True, default=uuid.uuid4)  # email

    USERNAME_FIELD = 'email'

    objects = MyUserManager()

    def has_perm(self, perm, obj=None):
        return self.is_superuser

    def has_module_perms(self, app_label):
        return self.is_superuser

    def __str__(self):
        """
        Unicode representation for an user model.

        :return: string
        """
        return self.email

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.

        :return: string
        """
        return "{0} {1}".format(self.first_name, self.last_name)

    def get_short_name(self):
        """
        Return the first_name.

        :return: string
        """
        return self.first_name

    def activation_expired(self):
        """
        Check if user's activation has expired.

        :return: boolean
        """
        return self.date_joined + timedelta(days=settings.ACCOUNT_ACTIVATION_DAYS) < timezone.now()

    def confirm_email(self):
        """
        Confirm email.

        :return: boolean
        """
        if not self.activation_expired() and not self.confirmed_email:
            self.confirmed_email = True
            self.save()
            return True
        return False
