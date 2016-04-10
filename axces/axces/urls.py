"""axces URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from app import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^dashboard/',views.dashboard,name='dashboard'),
    url(r'^upload_from_partners/',views.upload_from_partners,name='ufp'),
    url(r'^merchant_form_1/',views.form_management_1,name='fm1'),
    url(r'^pan_image/',views.pan_correct_data,name='pcd'),
    url(r'^review/',views.review,name='review'),
    url(r'^review_individual/',views.review_individual,name='review')
]
