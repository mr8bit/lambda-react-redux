from django.conf.urls import url

from . import views as event_views

urlpatterns = [

    url(r'category/',
        event_views.CategoryViewSet.as_view(),
        name='category_event_list'),

    url('^sortbyCategory/(?P<category>[-\d]+)/', event_views.SortEventByCategoryList.as_view()),

    url(r'',
        event_views.EventViewSet.as_view({'get': 'list'}),
        name='event_list'),

]
