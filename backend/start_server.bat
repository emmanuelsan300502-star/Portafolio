@echo off
echo Activando entorno virtual...
call venv\Scripts\activate.bat
echo.
echo Iniciando servidor Django...
python manage.py runserver
pause



