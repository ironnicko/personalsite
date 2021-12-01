from django.urls import path, re_path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    re_path(r"^contact", views.contact, name="contact_url"),
    re_path(r"^$", views.home, name="home_url")
] + static(settings.STATIC_URL,
 document_root=settings.STATIC_ROOT)