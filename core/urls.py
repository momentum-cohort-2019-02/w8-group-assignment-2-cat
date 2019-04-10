from django.urls import path, include
from . import views
from core import views as core_views

urlpatterns = [
    path('', core_views.index, name='index'),
    path('profile/<username>', core_views.user_profile, name="user_profile"),
    path('quiz/<int:pk>/create_card', core_views.card_new, name="create-card"),
    path('quiz/', core_views.quiz_new, name="create-quiz"),
    path('game/', core_views.game, name="game"),
    path('quiz/<int:pk>/get_card_data/', core_views.get_card_data, name='get_card_data'),
]