from django.shortcuts import render

from .models import Card

# Create your views here.


def home(request):
    card = Card.objects.all()
    content = {"cards": card}
    return render(request, "index.html", context=content)
