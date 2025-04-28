from django.db import models

# Create your models here.
class Lesson(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Crn(models.Model):
    number = models.CharField(max_length=200)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='crns')
    instructor = models.ForeignKey('user.CustomUser', on_delete=models.CASCADE, related_name='instructed_classes')
    students = models.ManyToManyField('user.CustomUser', related_name='classes')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)