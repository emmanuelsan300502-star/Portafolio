# Script para iniciar el servidor Django
Write-Host "Activando entorno virtual..." -ForegroundColor Green
& .\venv\Scripts\Activate.ps1
Write-Host ""
Write-Host "Iniciando servidor Django..." -ForegroundColor Green
python manage.py runserver



