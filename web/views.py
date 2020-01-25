from django.shortcuts import render

# Create your views here.

def HomeView(request):
    return render(request, 'web/home.html', {'title': 'Jacuzzi Mansions'})
