# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from blog.models import Article
from blog.serializers import ArticleSerializer, ArticleViewSerializer, MainArticleSerializer
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import renderers, response, schemas, pagination
from rest_framework.response import Response


class ExamplePagination(pagination.PageNumberPagination):
    page_size = 5


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'

    @list_route(methods=['get'])
    def main(self, request):
        self.serializer_class = MainArticleSerializer
        main = self.queryset.filter(type='main').first()
        serializer = self.get_serializer(main, many=False)
        return Response(serializer.data)

    def get_object(self):
        self.serializer_class = ArticleViewSerializer
        id = self.kwargs['id']
        return self.queryset.get(id=id)

    def get_queryset(self):
        main = self.queryset.filter(type='main').first()
        tags = self.request.query_params.get('tags', None)
        if tags:
            return self.queryset.filter(tags__name__in=[tags]).exclude(id=main.id).order_by('line_num')
        pages = self.request.query_params.get('pages', None)
        if pages:
            return self.queryset.filter(page=pages).exclude(id=main.id).order_by('line_num','order_in_line')
        return self.queryset.all().exclude(id=main.id)


class AllArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'

    def get_queryset(self):
        tags = self.request.query_params.get('tags', None)
        if tags:
            return self.queryset.filter(tags__name__in=[tags]).order_by('line_num')
        pages = self.request.query_params.get('pages', None)
        if pages:
            return self.queryset.filter(page=pages).order_by('line_num', 'order_in_line')
        return self.queryset.all()

    def get_object(self):
        self.serializer_class = ArticleViewSerializer
        id = self.kwargs['id']
        return self.queryset.get(id=id)
