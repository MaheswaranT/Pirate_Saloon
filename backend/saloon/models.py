from django.db import models # type: ignore

class Service(models.Model):
    name = models.CharField(max_length=200)
    picture = models.ImageField(upload_to='service_images/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    

    
class Appointment(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    preferred_date = models.DateField()
    preferred_time = models.TimeField()
    service = models.ForeignKey(Service, on_delete=models.CASCADE)