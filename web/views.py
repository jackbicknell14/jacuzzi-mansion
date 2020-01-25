from django.shortcuts import render

# Create your views here.

def HomeView(request):
    return render(request, 'jm/home.html', {'title': 'Jacuzzi Mansions'})
