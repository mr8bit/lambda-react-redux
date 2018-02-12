# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from blog.models import Article
from blog.serializers import ArticleSerializer
from rest_framework import generics
from rest_framework.response import Response

from rest_framework import mixins, viewsets
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


class ArticleViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


