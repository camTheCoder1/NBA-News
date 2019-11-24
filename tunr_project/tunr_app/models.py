from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=255)
    logo_url = models.CharField(max_length=400)
    coach = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Game(models.Model):
    opponent = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name='games')

    def __str__(self):
        return self.date


class News(models.Model):
    title = models.CharField(max_length=200)
    article_url = models.CharField(max_length=400)

    def __str__(self):
        return self.title
