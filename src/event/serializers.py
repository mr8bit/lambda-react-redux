from rest_framework import serializers

from .models import Event, Category


class EventSerializer(serializers.ModelSerializer):
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')

    class Meta:
        model = Event
        fields = ('title', 'dateCreate', 'type', 'image',)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'title', 'color')
