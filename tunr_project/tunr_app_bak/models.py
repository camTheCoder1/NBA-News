from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=255, default='n/a')
    logo_url = models.CharField(max_length=400, default='n/a')
    coach = models.CharField(max_length=255, default='n/a')

    def __str__(self):
        return self.name


class Game(models.Model):
    opponent = models.CharField(max_length=255, default='n/a')
    date = models.CharField(max_length=255, default='n/a')
    location = models.CharField(max_length=255, default='n/a')
    team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name='games')

    def __str__(self):
        return self.date


class News(models.Model):
    title = models.CharField(max_length=255, default='n/a')
    article_url = models.CharField(max_length=400, default='n/a')
    team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name='news')

    def __str__(self):
        return self.title
