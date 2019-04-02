from django.shortcuts import render
from models import Card, Quiz

def index(request):
    card = Card.object.all()


