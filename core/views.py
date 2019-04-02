from django.shortcuts import render
from models import Card, Quiz

def index(request):

    quizzes = Quiz.objects.all()
    cards = Card.objects.all()

    context = {
       'Card': cards,
       'Quiz': quizzes,
    }

    return render(request, 'index.html', context=context)