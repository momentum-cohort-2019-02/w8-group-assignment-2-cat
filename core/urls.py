  from django.urls import path, include

urlpatterns = [
    path('', core_views.index, name='index'),
]