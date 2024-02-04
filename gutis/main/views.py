from django.shortcuts import render



data = {
    'title': 'Личный кабинет',
    
}

def index(request):
    return render(request, 'main/index.html', data)


