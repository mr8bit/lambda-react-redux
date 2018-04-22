from blog import views as blog_views
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'list', blog_views.ArticleViewSet)
router.register(r'all', blog_views.AllArticleViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
