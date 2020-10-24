from django.urls import path, include
from . import api

urlpatterns = [
    path('login/', api.login),
    path('registerUser/', api.registerUser)
]
