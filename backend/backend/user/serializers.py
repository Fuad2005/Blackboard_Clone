from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=128, min_length=8, write_only=True)
    confirm_password = serializers.CharField(max_length=128, min_length=8, write_only=True)
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = CustomUser
        fields = ['username' ,'first_name', 'last_name', 'email', 'password', 'confirm_password', 'role', 'token']
        read_only_fields = ['id']

    def get_token(self, obj):
        token = Token.objects.get_or_create(user=obj)[0].key
        return token

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({'password': 'Passwords do not match'})
        return data

    def create(self, validated_data):
        del validated_data['confirm_password']
        validated_data['username'] = validated_data['email']
        user = CustomUser.objects.create_user(**validated_data)
        user.save()
        return user