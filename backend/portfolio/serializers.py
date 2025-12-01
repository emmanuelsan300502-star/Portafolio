from rest_framework import serializers

from .models import (
    About,
    ContactMessage,
    Experience,
    Project,
    Service,
    Technology,
    Testimonial,
)


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')


class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')


class AboutSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(many=True, read_only=True)

    class Meta:
        model = About
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at')


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ('full_name', 'email', 'message', 'company', 'budget_range')
        read_only_fields = ('created_at', 'updated_at', 'read')
        extra_kwargs = {
            'company': {'required': False, 'allow_blank': True},
            'budget_range': {'required': False, 'allow_blank': True},
        }


