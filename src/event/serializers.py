from rest_framework import serializers

from .models import Event, Category


class EventViewSerializer(serializers.ModelSerializer):
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')
    categoryName = serializers.ReadOnlyField(source='getCategory')
    timeEvent = serializers.ReadOnlyField(source='getTimeEvent')

    class Meta:
        model = Event
        fields = ('id', 'title', 'dateCreate', 'type', 'image',
                  'internet_available', 'take_computer', 'description', 'start', 'end',
                  'author', 'value', 'categoryName', 'place', 'timeEvent'
                  )


class EventSerializer(serializers.ModelSerializer):
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')

    class Meta:
        model = Event
        fields = ('id', 'title', 'dateCreate', 'type', 'image',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'color')
