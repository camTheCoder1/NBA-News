from django.contrib import admin
from .models import Team, Game, News

admin.site.register([Team, Game, News])
