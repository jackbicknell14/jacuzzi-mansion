from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def HomeView(request):
    return render(request, 'web/home.html', {'title': 'Jacuzzi Mansions'})

def cert(request):
    return HttpResponse('7NoNFFaCwnNn0GvinW4OmK4hTBUG04Fqq3BAmkkI5Ds.1gcphjPBdV1qYX2qcryv0wFejiQZpL_vaw3LgBwO9uk')
