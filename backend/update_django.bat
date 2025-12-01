@echo off
echo Deteniendo servidor si esta corriendo...
echo.
echo Actualizando Django...
call venv\Scripts\activate.bat
pip install --upgrade Django
echo.
echo Django actualizado! Ahora puedes reiniciar el servidor con:
echo python manage.py runserver
pause



