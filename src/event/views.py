# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import mixins, viewsets
from rest_framework.response import Response

from .models import Event, Category
from .serializers import EventSerializer, CategorySerializer
from rest_framework import generics


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


class EventViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class CategoryViewSet(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data)


class SortEventByCategoryList(generics.ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        category = self.kwargs['category']
        return Event.objects.filter(category=category)
