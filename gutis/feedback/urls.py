from django.urls import path
from . import views

urlpatterns = [
    path('', views.feedback_home, name='feedback'),
]