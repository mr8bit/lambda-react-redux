from rest_framework import serializers

from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    categoryName = serializers.ReadOnlyField(source='getCategory')
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')

    class Meta:
        model = Article
        fields = ('title', 'slug', 'image', 'categoryName', 'dateCreate', 'type')


class ArticleViewSerializer(serializers.ModelSerializer):
    categoryName = serializers.ReadOnlyField(source='getCategory')
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')

    class Meta:
        model = Article
        lookup_field = 'slug'
        fields = ('title', 'slug', 'image', 'description', 'categoryName', 'dateCreate', 'type')
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
