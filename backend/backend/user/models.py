from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        # ('admin', 'Admin'),
        ('instructor', 'Instructor'),
        ('student', 'Student'),
    ]


    username = models.CharField(max_length=255, unique=True, editable=False)
    role = models.CharField(max_length=15, choices=ROLE_CHOICES, default='student')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # def save(self, *args, **kwargs):
    #     if not self.pk:
    #         super().save(*args, **kwargs)
    #         self.username = str(self.pk)
    #         super().save(*args, **kwargs)
    #     else:
    #         super().save(*args, **kwargs)

    def __str__(self):
        if self.first_name == '' or self.last_name == '':
            return self.username
        return self.first_name + ' ' + self.last_name