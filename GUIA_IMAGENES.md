# 📸 Guía para Cambiar Imágenes en tu Portafolio

## 🎯 Dónde Editar Cada Imagen

### 1. **Tu Avatar y Foto Principal (Sobre mí)**
- **URL del Admin:** `http://localhost:8000/admin/portfolio/about/`
- **Campos a editar:**
  - **Avatar URL:** URL de tu foto de perfil (se muestra en la sección "Sobre mí")
  - **Hero illustration:** URL de la imagen grande del hero (parte superior de la página)

### 2. **Fotos de Proyectos**
- **URL del Admin:** `http://localhost:8000/admin/portfolio/project/`
- **Campo:** **Image URL** (imagen principal del proyecto)

### 3. **Avatares de Testimonios**
- **URL del Admin:** `http://localhost:8000/admin/portfolio/testimonial/`
- **Campo:** **Avatar URL** (foto de la persona que da el testimonio)

---

## 🌐 Cómo Obtener URLs de Imágenes

### **Opción 1: Imgur (Recomendado - Gratis y Fácil)**

1. Ve a https://imgur.com
2. Haz clic en "New post" o arrastra tu imagen
3. Sube tu imagen
4. Haz clic derecho en la imagen → "Copiar dirección de imagen"
5. Pega la URL en el campo correspondiente del admin

**Ejemplo de URL:** `https://i.imgur.com/abc123.jpg`

### **Opción 2: Cloudinary (Gratis con cuenta)**

1. Crea cuenta en https://cloudinary.com
2. Sube tu imagen
3. Copia la URL que te proporciona
4. Pega en el admin

### **Opción 3: GitHub (Si tienes repositorio)**

1. Crea una carpeta `images` en tu repositorio
2. Sube las imágenes
3. Usa la URL raw de GitHub:
   `https://raw.githubusercontent.com/tu-usuario/tu-repo/main/images/foto.jpg`

### **Opción 4: Google Drive / OneDrive**

1. Sube la imagen a Google Drive o OneDrive
2. Obtén el enlace compartido
3. Convierte el enlace a formato directo (usa herramientas como `gdurl.com` para Google Drive)

---

## 📝 Pasos Detallados para Cambiar una Imagen

### Ejemplo: Cambiar tu Avatar

1. **Sube tu imagen a Imgur:**
   - Ve a https://imgur.com
   - Sube tu foto
   - Copia la URL (ej: `https://i.imgur.com/tu-foto.jpg`)

2. **Edita en el Admin:**
   - Ve a `http://localhost:8000/admin/portfolio/about/`
   - Haz clic en el registro "Sobre mí"
   - Pega la URL en el campo **Avatar URL**
   - Haz clic en **Guardar**

3. **Verifica:**
   - Recarga tu portafolio en `http://localhost:5173`
   - Tu nueva foto debería aparecer

---

## 🖼️ Formatos Recomendados

- **Formato:** JPG o PNG
- **Tamaño recomendado:**
  - Avatar: 400x400px
  - Hero illustration: 1200x800px
  - Proyectos: 1200x600px
  - Testimonios: 200x200px

---

## ⚠️ Notas Importantes

- Las URLs deben ser **públicas** (cualquiera debe poder acceder)
- Usa URLs que terminen en `.jpg`, `.png`, `.webp`, etc.
- Evita URLs que requieran autenticación
- Si la imagen no aparece, verifica que la URL sea accesible abriéndola en una pestaña nueva del navegador

---

## 🔧 Solución de Problemas

**Problema:** La imagen no se muestra
- ✅ Verifica que la URL sea correcta (ábrela en el navegador)
- ✅ Asegúrate de que la URL sea pública
- ✅ Revisa la consola del navegador (F12) para ver errores

**Problema:** La imagen se ve borrosa
- ✅ Usa imágenes de mayor resolución
- ✅ Optimiza las imágenes antes de subirlas (usa TinyPNG.com)



