from rest_framework import serializers

from .models import Article
from accounts.models import User

from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class AuthorSerizlizer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField(source='get_full_name')

    class Meta:
        model = User
        fields = (
            'name', 'position', 'image'
        )


class ArticleSerializer(serializers.ModelSerializer):
    categoryName = serializers.ReadOnlyField(source='getCategory')
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')
    author = AuthorSerizlizer(read_only=True, many=False)

    class Meta:
        model = Article
        fields = ('id', 'title', 'slug','thumbnail', 'image', 'categoryName', 'dateCreate', 'type', 'author','page')


class ArticleViewSerializer(TaggitSerializer, serializers.ModelSerializer):
    categoryName = serializers.ReadOnlyField(source='getCategory')
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')
    author = AuthorSerizlizer(read_only=True, many=False)
    tags = TagListSerializerField()

    class Meta:
        model = Article
        lookup_field = 'slug'
        fields = ('title', 'slug', 'image', 'description', 'categoryName', 'dateCreate', 'type', 'author', 'tags')
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class MainArticleSerializer(TaggitSerializer, serializers.ModelSerializer):
    categoryName = serializers.ReadOnlyField(source='getCategory')
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')
    author = AuthorSerizlizer(read_only=True, many=False)
    tags = TagListSerializerField()

    class Meta:
        model = Article
        lookup_field = 'slug'
        fields = ('id',
                  'title', 'slug', 'image', 'short_description', 'description', 'categoryName', 'dateCreate', 'type',
                  'author',
                  'tags')
