from django.urls import path, include
from . import views
from core import views as core_views

urlpatterns = [
    path('', core_views.index, name='index'),

]