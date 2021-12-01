from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=256)
    email = models.EmailField(max_length=256)
    message = models.TextField(blank=True, max_length=500)

    def __str__(self):
        return self.name