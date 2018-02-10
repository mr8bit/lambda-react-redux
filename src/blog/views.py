# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from blog.models import Article
from blog.serializers import ArticleSerializer
from rest_framework import generics
from rest_framework.response import Response


class UserList(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = ArticleSerializer(queryset, many=True)
        return Response(serializer.data)
