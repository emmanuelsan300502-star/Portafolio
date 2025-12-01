from django.core.mail import send_mail
from django.conf import settings
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import About, ContactMessage, Project, Service, Technology, Testimonial
from .serializers import (
    AboutSerializer,
    ContactMessageSerializer,
    ProjectSerializer,
    ServiceSerializer,
    TechnologySerializer,
    TestimonialSerializer,
)


class BaseReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    """Desactiva la paginación para respuestas pequeñas."""

    pagination_class = None


class AboutViewSet(BaseReadOnlyViewSet):
    serializer_class = AboutSerializer

    def get_queryset(self):
        return (
            About.objects.all()
            .prefetch_related('experiences')
        )


class ServiceViewSet(BaseReadOnlyViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class TechnologyViewSet(BaseReadOnlyViewSet):
    serializer_class = TechnologySerializer
    queryset = Technology.objects.all()


class ProjectViewSet(BaseReadOnlyViewSet):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        return (
            Project.objects.all()
            .prefetch_related('technologies')
        )


class TestimonialViewSet(BaseReadOnlyViewSet):
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.all()


class ContactMessageViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    """Endpoint para el formulario de contacto."""

    serializer_class = ContactMessageSerializer
    queryset = ContactMessage.objects.all()

    def create(self, request, *args, **kwargs):
        """Crea un mensaje de contacto y envía un email."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact_message = serializer.save()

        # Enviar email
        try:
            subject = f'Nuevo mensaje de contacto de {contact_message.full_name}'
            message = f'''
Has recibido un nuevo mensaje de contacto desde tu portafolio:

Nombre: {contact_message.full_name}
Email: {contact_message.email}
{f"Empresa: {contact_message.company}" if contact_message.company else ""}
{f"Presupuesto: {contact_message.budget_range}" if contact_message.budget_range else ""}

Mensaje:
{contact_message.message}

---
Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
'''
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                ['emmanuelsan300502@gmail.com'],
                fail_silently=False,
            )
        except Exception as e:
            # Log el error pero no falla la creación del mensaje
            print(f'Error enviando email: {e}')

        return Response(serializer.data, status=status.HTTP_201_CREATED)
