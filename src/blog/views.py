# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from blog.models import Article
from blog.serializers import ArticleSerializer, ArticleViewSerializer
from rest_framework import generics
from rest_framework.response import Response


class ListModelMixin(object):
    """
    List a queryset.
    """

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ArticleViewSet(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        return Article.objects.all()


class OneArticleViewSet(generics.RetrieveAPIView):
    serializer_class = ArticleViewSerializer
    lookup_field = 'id'
    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        id = self.kwargs['id']
        return Article.objects.filter(id=id)
