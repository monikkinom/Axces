from django.shortcuts import render
import json
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
import random,string
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import requests
import logging
from gcm import GCM
import requests


# Create your views here.

def home(request):
    return render(request, 'index.html', {})

def demo(request):
    return render(request, 'demoindex.html', {})

def checkout(request):
    return render(request, 'checkout.html', {})

def onboard(request):
    return render(request, 'onboard.html',{})

def dashboard(request):
    return render(request, 'dashboard.html',{})

def login(request):
    return render(request, 'login.html', {})

@csrf_exempt
def callback(request):
    razorpay_payment_id = request.POST["razorpay_payment_id"]
    razorpay_key = "rzp_test_musdE1Oh6UtO9D"
    razorpay_secret = "S9QJnSQKBe2FPrW2SOsNwGQd"
    url = 'https://api.razorpay.com/v1/payments/' + razorpay_payment_id
    resp = requests.get(url, data={}, auth=(razorpay_key, razorpay_secret))
    return HttpResponse(resp)