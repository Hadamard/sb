from django.http import HttpResponse

def meine_view(request):
    # Verarbeite die Anfrage hier
    return HttpResponse("Hallo von der Django-View!")

