from django.conf.urls import url, include

from . import views as event_views
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'', event_views.EventViewSet)


urlpatterns = [

    url(r'category/',
        event_views.CategoryViewSet.as_view(),
        name='category_event_list'),

    url(r'^', include(router.urls)),

]
