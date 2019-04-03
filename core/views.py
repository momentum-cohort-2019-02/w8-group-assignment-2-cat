from django.shortcuts import render
from core.models import Card, Quiz

def index(request):

    quizzes = Quiz.objects.all()
    cards = Card.objects.all()

    context = {
       'Card': cards,
       'Quiz': quizzes,
    }

    return render(request, 'index.html', context=context)
def get_user_profile(request, username):
    user = User.objects.get(username=username)
    return render(request, 'core/user_profile.html', {"user":user})
