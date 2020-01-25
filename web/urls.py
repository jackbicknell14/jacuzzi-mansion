from django.urls import path
from .views import (
    HomeView)
from . import views

urlpatterns = [
    path('', HomeView, name="jm-home")
]
