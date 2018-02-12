from django.conf.urls import url

from . import views as event_views
urlpatterns = [
    url(r'',
        event_views.EvenrViewSet.as_view({'get': 'list'}),
        name='event_list'),
]
