from django.conf.urls import url

from blog import views as blog_views

urlpatterns = [
    url(r'',
        blog_views.ArticleViewSet.as_view(),
        name='article_list'),
]
