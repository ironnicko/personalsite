from django.shortcuts import render
from django.contrib import messages
from .forms import PersonForm
from .models import Person
from json import dump, dumps
from django.core.mail import send_mail

# Create your views here.
def contact(request):
    form = {
        'form':PersonForm
        }
    if request.method == "POST":
        print(request.POST)
        db = PersonForm(request.POST or None)
        if db.is_valid():
            try:
                if request.POST["email"]:
                    messages.success(request, "Message Sent Successfully!")
                    db.save()
                else:
                    messages.warning(request, "Message Failed to Send.\nEnter email.")
            except Exception as e:
                messages.warning(request, "Message Failed to Send.")
        else:
            messages.warning(request, "Message Failed to Send.")
    return render(request, "contact.html", form)

def home(request):
    main = [("d2socials.png", "A site made to get my classmates socials out to everyone in our class.", "https://github.com/ironnicko/d2socials/deployments/activity_log?environment=d2socials"), ("iphone_classifier.jpeg", "A project I made while preparing for NASA SpaceApps Challenge 2021. The program does what it says: uses AI&ML to detect an iPhone.", "https://github.com/ironnicko/iphone_classifier"),("online-class-launcher.png", "A program made to open my online-class links on time.", "https://github.com/ironnicko/online-class-launcher"), ("marine-derbis.jpeg", "Project work done on marine debris for NASA Science Apps 2021 competition.", "https://github.com/ironnicko/marine-derbis")]
    logos = ["python", "postgresql", "javascript", "c", "git", "css"]
    name = {i[0].split(".")[0]:(i[0], i[1], i[2]) for i in main}
    if request.method == "GET":
        form = {
            "name" : name,
            "nameJS" : dumps(name),
            "logos" : [i + ".svg" for i in logos]
            }
        return render(request, "home.html", context=form)