from django.conf.urls import url

from blog import views as blog_views

urlpatterns = [
    url(r'',
        blog_views.ArticleViewSet.as_view({'get': 'list'}),
        name='article_list'),
]
