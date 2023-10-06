from django.conf import settings
from django.db import models
class Items(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    price = models.DecimalField(max_digits=30,decimal_places=10,)
