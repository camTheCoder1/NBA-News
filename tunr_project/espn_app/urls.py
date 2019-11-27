# tunr_app/urls.py
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('team', views.TeamView)
router.register('game', views.GameView)
router.register('news', views.NewsView)

urlpatterns = [
    path('', include(router.urls))
]
