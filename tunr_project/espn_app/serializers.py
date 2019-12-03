from rest_framework import serializers

from .models import Team, Game, News


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'opponent', 'date', 'location')


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title', 'article_url')


class TeamSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)
    news = NewsSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = ('id', 'name', 'logo_url', 'coach', 'games', 'news')
