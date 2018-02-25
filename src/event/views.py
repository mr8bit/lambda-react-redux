# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import mixins, viewsets
from rest_framework.response import Response

from .models import Event, Category
from .serializers import EventSerializer, CategorySerializer, EventViewSerializer
from rest_framework import generics
from rest_framework import renderers, response, schemas, pagination


class CategoryViewSet(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)


class ExamplePagination(pagination.PageNumberPagination):
    page_size = 5


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_field = 'id'
    pagination_class = ExamplePagination


    def get_object(self):
        id = self.kwargs['id']
        self.serializer_class = EventViewSerializer
        return self.queryset.get(id=id)

    def get_queryset(self):
        category = self.request.query_params.get('category', None)
        print(category)
        self.pagination_class.page_size = 6
        if category == 'all':
            return self.queryset.all()
        if category:
            return self.queryset.filter(category=category)
        else:
            return self.queryset.all()
