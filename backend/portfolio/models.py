from django.db import models


class TimeStampedModel(models.Model):
    """Base abstracto con marcas de tiempo."""

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ('-created_at',)


class About(TimeStampedModel):
    """Información principal del portafolio."""

    headline = models.CharField(max_length=120)
    subheadline = models.CharField(max_length=150)
    description = models.TextField()
    location = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=40, blank=True)
    avatar_url = models.URLField(blank=True)
    hero_illustration = models.URLField(blank=True)
    resume_url = models.URLField(blank=True)
    cta_primary = models.CharField(max_length=80, default='Ver proyectos')
    cta_secondary = models.CharField(max_length=80, default='Contactarme')

    class Meta:
        verbose_name = 'Sobre mí'
        verbose_name_plural = 'Sobre mí'
        ordering = ('headline',)

    def __str__(self) -> str:
        return self.headline


class Experience(TimeStampedModel):
    """Eventos para la línea de tiempo animada."""

    about = models.ForeignKey(
        About, related_name='experiences', on_delete=models.CASCADE
    )
    role = models.CharField(max_length=120)
    company = models.CharField(max_length=120)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=120, blank=True)
    icon = models.CharField(max_length=80, blank=True)

    class Meta:
        ordering = ('-start_date',)

    def __str__(self) -> str:
        return f'{self.role} @ {self.company}'


class Service(TimeStampedModel):
    title = models.CharField(max_length=120)
    description = models.TextField()
    icon = models.CharField(max_length=80, help_text='Nombre del ícono de Lucide.')
    highlight = models.BooleanField(default=False)

    class Meta:
        ordering = ('title',)

    def __str__(self) -> str:
        return self.title


class Technology(TimeStampedModel):
    LEVEL_CHOICES = [
        ('beginner', 'Principiante'),
        ('intermediate', 'Intermedio'),
        ('advanced', 'Avanzado'),
        ('expert', 'Experto'),
    ]

    name = models.CharField(max_length=120)
    category = models.CharField(max_length=120)
    description = models.TextField(blank=True)
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default='advanced')
    icon = models.CharField(max_length=80, blank=True)
    color = models.CharField(max_length=20, default='#38bdf8')

    class Meta:
        ordering = ('name',)

    def __str__(self) -> str:
        return self.name


class Project(TimeStampedModel):
    title = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    summary = models.CharField(max_length=220, blank=True)
    image_url = models.URLField()
    github_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    year = models.PositiveIntegerField(default=2025)
    technologies = models.ManyToManyField(Technology, related_name='projects', blank=True)

    class Meta:
        ordering = ('-featured', '-year', 'title')

    def __str__(self) -> str:
        return self.title


class Testimonial(TimeStampedModel):
    author_name = models.CharField(max_length=120)
    role = models.CharField(max_length=120)
    company = models.CharField(max_length=120, blank=True)
    quote = models.TextField()
    avatar_url = models.URLField(blank=True)
    highlight = models.BooleanField(default=False)

    class Meta:
        ordering = ('-highlight', 'author_name')

    def __str__(self) -> str:
        return f'{self.author_name} - {self.company}'


class ContactMessage(TimeStampedModel):
    full_name = models.CharField(max_length=120)
    email = models.EmailField()
    message = models.TextField()
    company = models.CharField(max_length=120, blank=True)
    budget_range = models.CharField(max_length=80, blank=True)
    read = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Mensaje de contacto'
        verbose_name_plural = 'Mensajes de contacto'
        ordering = ('read', '-created_at')

    def __str__(self) -> str:
        return f'{self.full_name} ({self.email})'
