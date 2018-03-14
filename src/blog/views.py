# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from blog.models import Article
from blog.serializers import ArticleSerializer, ArticleViewSerializer,MainArticleSerializer
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import renderers, response, schemas, pagination
from rest_framework.response import Response

def try_to_fit(size, total, articles):
    if size + total > 100:
        return False
    elif size == 50:
        return True
    elif size == 25 and total % 2 == 1:
        return True
    elif size == 25 and search_small(articles):
        return True
    elif len(articles) == 1:
        return True
    else return False

def search_small(articles):
    count = 0
    for article in articles:
        if article.size == 25:
            count += 1
        if count == 2:
            return True
    return False

class ExamplePagination(pagination.PageNumberPagination):
    page_size = 5


class ArticleViewSet(viewsets.ModelViewSet):
    pagination_class = ExamplePagination
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'

    @list_route(methods=['get'])
    def main(self, request):
        self.serializer_class = MainArticleSerializer
        main = self.queryset.filter(type='main').first()
        serializer = self.get_serializer(main, many=False)
        return Response(serializer.data)

    # TODO: request to get line of articles, total size = 100
    @list_route(methods=['get'])
    def line(self, request):
        self.serializer_class = MainArticleSerializer
        line, total_size = [], 0
        while total_size < 100:
            i = 0
            for article in self.queryset:
                if try_to_fit(article.size, total_size, self.queryset[i:]):
                    line.append(article)
                    total_size += article.size
                i += 1
        serializer = self.get_serializer(line, many=True)
        return Response(serializer.data)

    def get_object(self):
        self.serializer_class = ArticleViewSerializer
        id = self.kwargs['id']
        return self.queryset.get(id=id)

    def get_queryset(self):
        tags = self.request.query_params.get('tags', None)
        if tags:
            print(tags)
            return self.queryset.filter(tags__name__in=[tags])
        return self.queryset.all().exclude(type='main')
