from django.shortcuts import render
from .models import Products, Order
from django.core.paginator import Paginator

# Create your views here.

def index(request):
    product_objects = Products.objects.all()
    item_name = request.GET.get('item_name')

    # search
    if item_name != '' and item_name is not None:
        product_objects = product_objects.filter(title__icontains = item_name)

    # paginator
    paginator = Paginator(product_objects,4)
    page = request.GET.get('page')
    product_objects = paginator.get_page(page)
    
    return render(request,'shop/index.html',{'product_objects':product_objects})

def detail(request,id):
    product_object = Products.objects.get(id=id)
    return render(request,'shop/detail.html',{'product_object':product_object})

def checkout(request):

    if(request.method == "POST"):
        itemsInput = request.POST.get('items',"")
        nameInput = request.POST.get('name',"")
        emailInput = request.POST.get('email',"")
        addressInput = request.POST.get('address',"")
        cityInput = request.POST.get('city',"")
        countryInput = request.POST.get('country',"")
        zipcodeInput = request.POST.get('zipcode',"")
        totalInput = request.POST.get('total',"")
        order = Order(items=itemsInput,name=nameInput,email=emailInput,address=addressInput,city=cityInput,country=countryInput,zipcode=zipcodeInput,total=totalInput)
        order.save()


    return render(request,'shop/checkout.html')