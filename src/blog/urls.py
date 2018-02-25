from blog import views as blog_views
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'', blog_views.ArticleViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
