from django.shortcuts import render
from django.contrib import messages
from .forms import PersonForm
from .models import Person
from json import dump, dumps

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
            messages.success(request, "Message Sent Successfully!")
            db.save()
        else:
            messages.warning(request, "Message Failed to Send.")
    form["names"] = names
    return render(request, "contact.html", form)

def home(request):
    main = [("d2socials.png", "A site made to get my classmates socials out to everyone in our class."), ("iphone_classifier.jpeg", "A project I made while preparing for NASA SpaceApps Challenge 2021. The program does what it says: detects iPhoneXR."),("online-class-launcher.png", "A program made to open my online-class links on time."), ("marine-derbis.jpeg", "Project work done on marine debris for NASA Science Apps 2021 competition.")]
    logos = ["python.svg", "postgresql.svg"]
    name = {i[0].split(".")[0]:(i[0], i[1]) for i in main}
    if request.method == "GET":
        form = {
            "name" : name,
            "nameJS" : dumps(name),
            "logos" : logos
            }
        return render(request, "home.html", context=form)