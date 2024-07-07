from django.urls import path # type: ignore
from .views import base

urlpatterns = [
    path('', base, name='base'),
]
