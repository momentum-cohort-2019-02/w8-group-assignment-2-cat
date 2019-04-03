from django import forms
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _
from core.models import Quiz, Card

class RegisterForm(forms.Form):
    username = forms.CharField(max_length=100, help_text="Enter username")

    def validate_username(self):
        data = self.username

class QuizForm(forms.ModelForm):

    class Meta:
        model = Quiz
        fields = ('title',)

class CardForm(forms.ModelForm):

    class Meta:
        model = Card
        fields = ('question', 'answer',)



