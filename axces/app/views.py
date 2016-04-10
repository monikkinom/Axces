from django.shortcuts import render, render_to_response
from django.http import HttpResponse
import csv
from forms import MainForm
import random
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
from django.core.files.storage import FileSystemStorage
import pytesseract
import os, time
from django.utils.text import slugify

# Create your views here.
fs = FileSystemStorage()


def dashboard(request):
    return render(request, 'index.html')


def createCSV(result_ranks):
    lines = result_ranks.read().splitlines()
    reader = csv.reader(lines)
    i = 0
    response = []
    for row in reader:
        # call chirag's website function
        response.append([row[0], row[1], row[2], row[3], random.choice([1, 2])])
    return response


def upload_from_partners(request):
    vals = None
    if request.method == 'POST':
        form = MainForm(request.POST, request.FILES)
        if form.is_valid():
            vals = createCSV(request.FILES['partner_csv'])
    else:
        form = MainForm()

    return render(request, 'upload_from_partners.html', {
        'form': form, 'vals': vals
    })


def form_management_1(request):
    return render(request, 'form_management_1.html')


@csrf_exempt
def pan_correct_data(request):
    file = request.FILES['img']
    try:
        with fs.open(fs.path(slugify(os.path.splitext(file.name)[0]) + '-' + str(int(time.time())) +
                                     os.path.splitext(file.name)[1]), 'wb+') as destination:
            for chunk in file.chunks():
                destination.write(chunk)
        destination.close()
        Image.open(destination.name).convert('L').save(destination.name)
        image_extracted_string = pytesseract.image_to_string(Image.open(destination.name, mode="r"))
    except IOError:
        return HttpResponse("Error occured :(")
    return HttpResponse(image_extracted_string)


def review(request):
    return render(request, 'review_pending.html')


def review_individual(request):
    return render(request,'review_individual.html')
