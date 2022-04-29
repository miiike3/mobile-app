from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator 

class CustomUser(AbstractUser):
    username = models.CharField(max_length = 50, unique = True)
    password = models.CharField(max_length = 50)
    def __str__(self):
        return self.username

class Song(models.Model):
    title = models.CharField(primary_key = True, max_length = 50)
    artist = models.CharField(max_length = 50)
    rating_average = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)], default=0)
    def __str__(self):
        return self.title

class Rating(models.Model):
    rating_id = models.AutoField(primary_key=True)
    username = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    def __str__(self):
        return "ID: " + str(self.rating_id) + " Song Title: " + str(self.song) + " Rating: " + str(self.rating)

