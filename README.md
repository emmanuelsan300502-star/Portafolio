# Portafolio Fullstack (React + Django)

Portafolio profesional animado inspirado en estudios de diseño modernos. Incluye backend administrable en Django + Django REST Framework y frontend React (Vite + Tailwind + Framer Motion).

## Requisitos

- Python 3.12+
- Node 18+ (para ejecutar el frontend; instala [Node.js](https://nodejs.org) si aún no está disponible)

## Backend (`/backend`)

```bash
cd backend
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # opcional para entrar al admin
python manage.py seed_portfolio   # datos demo
python manage.py runserver
```

Endpoints disponibles:

- `GET /api/about/`
- `GET /api/services/`
- `GET /api/projects/`
- `GET /api/technologies/`
- `GET /api/testimonials/`
- `POST /api/contact/`

## Frontend (`/frontend`)

```bash
cd frontend
npm install     # o pnpm install / yarn
npm run dev
```

Variables de entorno:

```
VITE_API_URL=http://localhost:8000/api
```

## Características clave

- Animaciones suaves con Framer Motion y diseño responsive en Tailwind.
- Modo claro/oscuro con persistencia.
- Datos dinámicos desde Django, optimizados con `select_related` / `prefetch_related`.
- Panel admin para editar contenido.
- Formulario de contacto que envía datos hacia el endpoint `/api/contact/`.


