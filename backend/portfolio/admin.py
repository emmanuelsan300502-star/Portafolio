from django.contrib import admin

from .models import (
    About,
    ContactMessage,
    Experience,
    Project,
    Service,
    Technology,
    Testimonial,
)


class ExperienceInline(admin.TabularInline):
    model = Experience
    extra = 1
    fields = ('role', 'company', 'description', 'start_date', 'end_date', 'location', 'icon')


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('headline', 'location', 'email', 'updated_at')
    list_editable = ('location', 'email')
    search_fields = ('headline', 'description', 'email')
    fieldsets = (
        ('Información Principal', {
            'fields': ('headline', 'subheadline', 'description')
        }),
        ('Contacto', {
            'fields': ('email', 'phone', 'location')
        }),
        ('🖼️ Imágenes (URLs públicas)', {
            'fields': ('avatar_url', 'hero_illustration'),
            'description': 'Pega URLs públicas de tus imágenes. Puedes usar Imgur, Cloudinary, etc.'
        }),
        ('Documentos', {
            'fields': ('resume_url',)
        }),
        ('Botones (CTAs)', {
            'fields': ('cta_primary', 'cta_secondary')
        }),
    )
    inlines = [ExperienceInline]


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'highlight', 'updated_at')
    list_filter = ('highlight',)
    search_fields = ('title', 'description')


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'level')
    list_filter = ('category', 'level')
    search_fields = ('name', 'description')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'year')
    list_filter = ('featured', 'year')
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    filter_horizontal = ('technologies',)
    fieldsets = (
        ('Información del Proyecto', {
            'fields': ('title', 'slug', 'description', 'summary', 'year', 'featured')
        }),
        ('🖼️ Imagen del Proyecto', {
            'fields': ('image_url',),
            'description': 'URL pública de la imagen principal del proyecto (recomendado: 1200x600px)'
        }),
        ('Enlaces', {
            'fields': ('github_url', 'demo_url')
        }),
        ('Tecnologías', {
            'fields': ('technologies',)
        }),
    )


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author_name', 'company', 'highlight')
    list_filter = ('highlight',)
    search_fields = ('author_name', 'quote')
    fieldsets = (
        ('Información del Testimonio', {
            'fields': ('author_name', 'role', 'company', 'quote', 'highlight')
        }),
        ('🖼️ Avatar', {
            'fields': ('avatar_url',),
            'description': 'URL pública de la foto de la persona (recomendado: 200x200px)'
        }),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'read', 'created_at')
    list_filter = ('read', 'created_at')
    search_fields = ('full_name', 'email', 'message')
