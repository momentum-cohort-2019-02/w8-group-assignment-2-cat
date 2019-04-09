from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Quiz(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="quizzes")
    title = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    answer_right = models.IntegerField(default="0")
    answer_wrong = models.IntegerField(default="0")
    

    def __str__(self):
        return str(self.title)
    # def get_absolute_url(self):
    #     return reverse('create-card', args=[str(self.id)])

class Card(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name="cards")
    question = models.TextField(blank=False, null=False)
    answer = models.TextField(blank=False, null=False)
    answer_right = models.IntegerField(default="0")
    answer_wrong = models.IntegerField(default="0")
    
    def __str__(self):
        return str(self.question)
