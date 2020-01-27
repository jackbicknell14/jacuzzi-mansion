from django.urls import path
from .views import (
    HomeView, cert)
from . import views

urlpatterns = [
    path('', HomeView, name="jm-home"),
    path('.well-known/acme-challenge/7NoNFFaCwnNn0GvinW4OmK4hTBUG04Fqq3BAmkkI5Ds',
         cert, name="jm-cert")
]
