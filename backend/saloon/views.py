from django.shortcuts import render, redirect # type: ignore
from django.contrib import messages # type: ignore
from .models import Service
from .forms import AppointmentForm

def base(request):
    services = Service.objects.all()
    
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('base')
    else:
        form = AppointmentForm()
    
    return render(request, 'base.html', {'services': services, 'form': form})
