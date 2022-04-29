from rest_framework import serializers
from .models import CustomUser, Song, Rating

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('title', 'artist', 'rating_average')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('rating_id', 'username', 'song', 'rating')

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance