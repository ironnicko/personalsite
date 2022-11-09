from django.shortcuts import render
from django.contrib import messages
from .forms import PersonForm
from .models import Person
from json import dumps
from datetime import datetime
from django.core.mail import send_mail
import os

# Create your views here.
def contact(request):
    form = {
        'form':PersonForm,
        "year" : datetime.now().strftime("%Y")
        }
    if request.method == "POST":
        print(request.POST)
        db = PersonForm(request.POST or None)
        if db.is_valid():
           db.save()
        else:
            messages.warning(request, "Message Failed to Send.")
    return render(request, "contact.html", form)

def home(request):
    main = [
    ("d2socials.png", "A site made to get my classmates socials out to everyone in our class.", "https://d2socials.herokuapp.com"),
    ("iPhoneClassifier.jpeg", "A project I made while preparing for NASA SpaceApps Challenge 2021. The program does what it says: uses AI&ML to detect an iPhone.", "https://github.com/ironnicko/iphone_classifier"),
    ("ProjectNS.png", "A project I made with 2 other friends to segment and count the nuclei in an image. I came up with leveraging DFS to find the number of connected components and hence deduce the nuclei count.", "https://github.com/ironnicko/Project-NS"),
    ("AIRoadGuard.png", "A project I made with 4 other people, which helped us win finals spot in Datascience Hackathon 2022 and won us Best Open Track Innovation in Mesohacks, to detect and report an accident to officials instatly to hence reduce the response time. I dealt with the backend design of this project and also the openCV part of the project.", "https://github.com/ironnicko/AIroadGuard")
    ]
    logos = ["python", "postgresql", 'c++', "javascript", "c", "git", "css"]
    name = {i[0].split(".")[0]:(i[0], i[1], i[2]) for i in main}
    if request.method == "GET":
        form = {
            "name" : name,
            "nameJS" : dumps(name),
            "logos" : [i + ".svg" for i in logos],
            "year" : datetime.now().strftime("%Y")
            }
        return render(request, "home.html", context=form)
