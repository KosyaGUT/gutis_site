from django.shortcuts import render
from .models import Articles

data = {
    'title': 'Личный кабинет',
    'news': Articles.objects.all().order_by('-date')
}

def index(request):
    # news = Articles.objects.all()
    return render(request, 'main/index.html', data)

