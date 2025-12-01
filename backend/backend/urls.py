"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from portfolio.views import (
    AboutViewSet,
    ContactMessageViewSet,
    ProjectViewSet,
    ServiceViewSet,
    TechnologyViewSet,
    TestimonialViewSet,
)

router = DefaultRouter()
router.register('about', AboutViewSet, basename='about')
router.register('services', ServiceViewSet, basename='services')
router.register('projects', ProjectViewSet, basename='projects')
router.register('technologies', TechnologyViewSet, basename='technologies')
router.register('testimonials', TestimonialViewSet, basename='testimonials')
router.register('contact', ContactMessageViewSet, basename='contact')


def api_root(request):
    """Vista raíz que muestra información de la API."""
    return JsonResponse({
        'message': 'Portafolio API - Backend Django REST Framework',
        'version': '1.0.0',
        'endpoints': {
            'about': '/api/about/',
            'services': '/api/services/',
            'projects': '/api/projects/',
            'technologies': '/api/technologies/',
            'testimonials': '/api/testimonials/',
            'contact': '/api/contact/ (POST)',
            'admin': '/admin/',
        },
        'documentation': 'Accede a los endpoints listados arriba para obtener los datos del portafolio.',
    })


urlpatterns = [
    path('', api_root, name='api-root'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
