from django.db import models
from django.contrib.auth.models import User

class Card(models.Model):
    front = models.CharField(max_length=255)
    back = models.CharField(max_length=255)
    user = models.ForeignKey(User)