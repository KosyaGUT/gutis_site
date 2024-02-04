from django.shortcuts import render

data = {
    'title': 'Отзывы',
    
}

def feedback_home(request):
    return render(request, 'feedback/feedback.html', data)
