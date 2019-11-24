from rest_framework import serializers

from .models import Team, Game, News


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('opponent', 'date', 'location', 'team')


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'article_url')


class TeamSerializer(serializers.ModelSerializer):
    games = GameSerializer(many=True, read_only=True)
    news = NewsSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = ('name', 'logo_url', 'coach', 'game', 'news')
