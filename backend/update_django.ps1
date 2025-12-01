# Script para actualizar Django
Write-Host "Actualizando Django a la versión más reciente..." -ForegroundColor Green
Write-Host ""
& .\venv\Scripts\Activate.ps1
pip install --upgrade Django
Write-Host ""
Write-Host "✅ Django actualizado!" -ForegroundColor Green
Write-Host "Ahora puedes reiniciar el servidor con: python manage.py runserver" -ForegroundColor Cyan



