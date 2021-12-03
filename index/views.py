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
    main = [("d2socials.png", "A site made to get my classmates socials out to everyone our class."), ("online-class-launcher.png", "A program made to open my online-class links on time."), ("marine-derbis.jpeg", "Project work done on marine debris for NASA Science Apps 2021 competition.")]
    name = {i[0].split(".")[0]:(i[0], i[1]) for i in main}
    if request.method == "GET":
        form = {
            "name" : name,
            }
        return render(request, "home.html", context=form)