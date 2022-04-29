from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CustomUser, Song, Rating
from .serializers import UserSerializer, SongSerializer, RatingSerializer, RegisterUserSerializer
from rest_framework.permissions import AllowAny

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()


class RatingView(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
     

class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format = 'json'):
        reg_serializer = RegisterUserSerializer(data=request.data)
        if reg_serializer.is_valid():
            newuser = reg_serializer.save()
            if newuser:
                json = reg_serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(reg_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



