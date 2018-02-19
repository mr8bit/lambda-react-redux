from blog import views as blog_views
from django.conf.urls import url

urlpatterns = [

    url('^get/(?P<id>[-\w]+)/', blog_views.OneArticleViewSet.as_view()),
    url(r'',
        blog_views.ArticleViewSet.as_view(),
        name='article_list'),
]
