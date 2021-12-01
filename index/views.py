from django.shortcuts import render
from .forms import PersonForm
from .models import Person
from json import dumps

# Create your views here.
def contact(request):
    form = {
        'form':PersonForm
        }
    names = [i for i in Person.objects.all()]
    if request.method == "POST":
        print(request.POST)
        db = PersonForm(request.POST or None)
        if db.is_valid():
            db.save()
    form["names"] = names
    return render(request, "contact.html", form)

def home(request):
    if request.method == "GET":
        return render(request, "home.html")