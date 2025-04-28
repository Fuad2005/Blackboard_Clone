from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView, CreateAPIView
from rest_framework import status

from .serializers import (
    CustomUser, 
    RegisterSerializer
)

# Create your views here.
class RegisterAV(RetrieveAPIView, CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer



@api_view(["POST"])
def logout(request):
    request.user.auth_token.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
