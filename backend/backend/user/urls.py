from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    # path('', views.UserList.as_view()),
    # path('<int:pk>', views.UserDetail.as_view()),
    path('register/', views.RegisterAV.as_view()),
    path('login/', obtain_auth_token),
    path('logout/', views.logout),
]