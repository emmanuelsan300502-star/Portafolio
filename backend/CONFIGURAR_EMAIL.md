# 📧 Configuración de Email para el Formulario de Contacto

## 🔧 Configuración Actual (Desarrollo)

Actualmente, el sistema está configurado para **imprimir los emails en la consola** (modo desarrollo). Esto es útil para probar sin configurar SMTP.

Cuando alguien envíe un mensaje desde el formulario, verás el email en la terminal donde corre el servidor Django.

## 📨 Configurar Email Real (Producción)

Para que los emails se envíen realmente a `emmanuelsan300502@gmail.com`, necesitas configurar SMTP.

### Opción 1: Gmail (Recomendado)

1. **Habilita la verificación en 2 pasos** en tu cuenta de Google
2. **Genera una "App Password"**:
   - Ve a: https://myaccount.google.com/apppasswords
   - Selecciona "Mail" y "Otro (nombre personalizado)"
   - Escribe "Portafolio Django"
   - Copia la contraseña generada (16 caracteres)

3. **Edita `backend/backend/settings.py`**:

```python
# Email configuration para Gmail
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'emmanuelsan300502@gmail.com'
EMAIL_HOST_PASSWORD = 'tu-app-password-aqui'  # La contraseña de 16 caracteres
DEFAULT_FROM_EMAIL = 'emmanuelsan300502@gmail.com'
SERVER_EMAIL = 'emmanuelsan300502@gmail.com'
```

4. **Comenta o elimina** las líneas del `EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'`

### Opción 2: Otros Servicios SMTP

Para otros servicios (Outlook, SendGrid, etc.), ajusta estos valores:

```python
EMAIL_HOST = 'smtp.tu-servicio.com'
EMAIL_PORT = 587  # o 465 para SSL
EMAIL_USE_TLS = True  # o EMAIL_USE_SSL = True para puerto 465
EMAIL_HOST_USER = 'tu-email@ejemplo.com'
EMAIL_HOST_PASSWORD = 'tu-contraseña'
```

## ✅ Verificación

1. Reinicia el servidor Django
2. Envía un mensaje de prueba desde el formulario
3. Revisa tu bandeja de entrada (y spam) en `emmanuelsan300502@gmail.com`

## 🔒 Seguridad

**NUNCA** subas el archivo `settings.py` con tu contraseña real a Git. Usa variables de entorno:

```python
import os

EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_PASSWORD', '')
```

Y configura la variable de entorno en tu servidor.



