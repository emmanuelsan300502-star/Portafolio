from datetime import date

from django.core.management.base import BaseCommand

from portfolio.models import (
    About,
    Experience,
    Project,
    Service,
    Technology,
    Testimonial,
)


class Command(BaseCommand):
    help = 'Crea contenido demo para el portafolio.'

    def handle(self, *args, **options):
        about, _ = About.objects.get_or_create(
            headline='Ingeniero en Sistemas Computacionales',
            defaults={
                'subheadline': 'Creo experiencias digitales enfocadas en performance.',
                'description': 'Desarrollo productos con foco en UX, accesibilidad y escalabilidad.',
                'location': 'Ciudad de México, MX',
                'email': 'ejemplo@correo.dev',
                'phone': '+52 55 1234 5678',
                'avatar_url': 'https://avatars.githubusercontent.com/u/000000?v=4',
                'hero_illustration': 'https://images.unsplash.com/photo-1527430253228-e93688616381',
                'resume_url': 'https://drive.google.com/demo_cv',
            },
        )

        Experience.objects.get_or_create(
            about=about,
            role='Lead Frontend',
            company='TechVision',
            defaults={
                'description': 'Lideré el rediseño de la plataforma SaaS aumentando conversiones 35%.',
                'start_date': date(2023, 2, 1),
                'location': 'Remoto',
                'icon': 'Rocket',
            },
        )
        Experience.objects.get_or_create(
            about=about,
            role='Fullstack Engineer',
            company='CloudForge',
            defaults={
                'description': 'Diseñé microservicios en Django y arquitecturas serverless.',
                'start_date': date(2021, 6, 1),
                'end_date': date(2022, 12, 1),
                'location': 'CDMX',
                'icon': 'Server',
            },
        )

        services = [
            ('Desarrollo Frontend', 'Interfaces reactivas con React, Next y Vite.', 'Layout'),
            ('Arquitectura Backend', 'APIs en Django/DRF listas para escalar.', 'Workflow'),
            ('Consultoría UX', 'Workshops y prototipado rápido centrado en usuarios.', 'Sparkles'),
        ]
        for title, description, icon in services:
            Service.objects.get_or_create(
                title=title,
                defaults={'description': description, 'icon': icon, 'highlight': True},
            )

        stack = [
            ('React', 'Frontend', 'Componentes reutilizables y SSR.', 'expert', '#61dafb'),
            ('Django', 'Backend', 'APIs limpias con ORM y DRF.', 'expert', '#0c4b33'),
            ('TypeScript', 'Frontend', 'Escalabilidad y DX impecable.', 'advanced', '#2f74c0'),
            ('AWS', 'Infraestructura', 'Despliegues automatizados.', 'advanced', '#ff9900'),
        ]
        tech_instances = []
        for name, category, description, level, color in stack:
            tech, _ = Technology.objects.get_or_create(
                name=name,
                defaults={
                    'category': category,
                    'description': description,
                    'level': level,
                    'color': color,
                    'icon': name,
                },
            )
            tech_instances.append(tech)

        project, _ = Project.objects.get_or_create(
            slug='nebulosa-platform',
            defaults={
                'title': 'Nebulosa Platform',
                'description': 'Suite de productividad con analítica en tiempo real.',
                'summary': 'Dashboard modular con modo oscuro y workflows automatizados.',
                'image_url': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
                'github_url': 'https://github.com/demo/nebulosa',
                'demo_url': 'https://nebulosa.app',
                'featured': True,
                'year': 2024,
            },
        )
        project.technologies.set(tech_instances[:3])

        Testimonial.objects.get_or_create(
            author_name='Valeria Mendoza',
            company='Product Lead, Aurora Labs',
            defaults={
                'role': 'Product Lead',
                'quote': 'Transformó nuestra plataforma en 10 semanas superando todos los KPIs.',
                'avatar_url': 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
                'highlight': True,
            },
        )

        self.stdout.write(self.style.SUCCESS('Datos demo cargados.'))


