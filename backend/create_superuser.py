"""
Script para crear un superusuario de Django de forma no interactiva.
Ejecuta: python create_superuser.py
"""
import os
import sys
import django

# Configurar Django
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

# Configuración del superusuario
USERNAME = 'admin'
EMAIL = 'admin@example.com'
PASSWORD = 'admin123'  # Cambia esto por una contraseña segura

def create_superuser():
    """Crea un superusuario si no existe."""
    if User.objects.filter(username=USERNAME).exists():
        print(f'❌ El usuario "{USERNAME}" ya existe.')
        print('💡 Si quieres cambiar la contraseña, usa:')
        print(f'   python manage.py changepassword {USERNAME}')
        return
    
    try:
        User.objects.create_superuser(
            username=USERNAME,
            email=EMAIL,
            password=PASSWORD
        )
        print('✅ Superusuario creado exitosamente!')
        print(f'   Usuario: {USERNAME}')
        print(f'   Email: {EMAIL}')
        print(f'   Contraseña: {PASSWORD}')
        print('')
        print('⚠️  IMPORTANTE: Cambia la contraseña después del primer inicio de sesión.')
        print('   Accede a: http://localhost:8000/admin/')
    except Exception as e:
        print(f'❌ Error al crear superusuario: {e}')

if __name__ == '__main__':
    create_superuser()



