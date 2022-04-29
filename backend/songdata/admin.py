from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm
from .models import CustomUser, Song, Rating

class CustomUserAdmin(UserAdmin):
        add_form = CustomUserCreationForm
        model = CustomUser


admin.site.register(Song)
admin.site.register(Rating)
admin.site.register(CustomUser, CustomUserAdmin)
