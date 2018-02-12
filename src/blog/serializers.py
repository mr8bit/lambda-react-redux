from rest_framework import serializers

from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    categoryName = serializers.ReadOnlyField(source='getCategory')
    dateCreate = serializers.ReadOnlyField(source='getDateCreate')

    class Meta:
        model = Article
        fields = ('title', 'slug', 'description','image', 'categoryName','dateCreate', 'type')
