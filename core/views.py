import json
from django.core import serializers
from django.shortcuts import render, redirect, get_object_or_404
from core.models import Card, Quiz
from django.contrib.auth.models import User
from .forms import QuizForm, CardForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages
import json
from django.http import JsonResponse

def index(request):

    quizzes = Quiz.objects.all()
    cards = Card.objects.all()

    context = {
       'cards': cards,
       'quizzes': quizzes,
    }

    return render(request, 'index.html', context=context)

def user_profile(request, username):
    user = User.objects.get(username=username)
    return render(request, 'user_profile.html', {"user":user})

# @login_required
def quiz_new(request):
    if request.method == "POST":
        form = QuizForm(request.POST)
        if form.is_valid():
            quiz = form.save(commit=False)
            quiz.author = request.user
            quiz.save()
            return redirect('create-card', pk=quiz.pk)
    else:
        form = QuizForm()
    return render(request, 'create_quiz.html', {'form': form})

# @login_required
def card_new(request, pk):
    quiz = get_object_or_404(Quiz, pk=pk)
    if request.method == "POST":
        form = CardForm(request.POST)
        if form.is_valid():
            card = form.save(commit=False)
            card.quiz = quiz
            card.save()
            messages.success(request, "Card created!")
            return redirect('create-card', pk=pk)
    else:
        form = CardForm()
    return render(request, 'create_card.html', {'form':form, 'quiz':quiz})

def game(request):
    quizzes = Quiz.objects.all()
    cards = Card.objects.all()

    context = {
       'cards': cards,
       'quizzes': quizzes,
    }

    return render(request, 'game.html', context=context)

def get_card_data(request, pk):
    quiz = get_object_or_404(Quiz, pk=pk)
    cards = quiz.cards.all()
    return JsonResponse({'quiz_cards': [(card.question, card.answer) for card in cards]})