from rest_framework import serializers

from .models import Event


class EventSerializer(serializers.ModelSerializer):
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')

    class Meta:
        model = Event
        fields = ('title', 'dateCreate', 'type', 'image',)
