# Boletín HydroTech con EmailJS

## Archivos
- `index.html`, `style.css`, `script.js`: la página de suscripción.
- `plantilla-correo.html`: el HTML del correo de bienvenida (pegar en EmailJS).

## 1. Configurar EmailJS (emailjs.com)
1. **Regístrate** gratis.
2. **Email Services > Add New Service > Gmail** y conecta tu cuenta. Copia el **Service ID**.
3. **Email Templates > Create New Template**:
   - **Subject:** `¡Bienvenido a HydroTech!`
   - **To Email:** `{{to_email}}`  (clave: así llega al correo que escribe la persona, no al tuyo)
   - **From Name:** `HydroTech`
   - En el editor de contenido pulsa **`<>` (Edit Content > Code Editor)** y pega todo el contenido de `plantilla-correo.html`.
   - Guarda y copia el **Template ID**.
4. **Account > General:** copia tu **Public Key**.

## 2. Pegar credenciales
En `script.js`, reemplaza:
```js
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";
```

## 3. Probar en local
Abre la carpeta en VS Code y usa la extensión **Live Server** (clic derecho en `index.html > Open with Live Server`). Escribe un correo distinto al tuyo y verifica que llegue (revisa también spam).

## 4. Publicar (GitHub Pages)
1. Crea un repositorio, por ejemplo `hydrotech-boletin`, y sube los 3 archivos de la página (puedes subir también la plantilla).
2. **Settings > Pages > Source: Deploy from a branch > main / (root) > Save**.
3. En un minuto tendrás el enlace: `https://TU-USUARIO.github.io/hydrotech-boletin/`.
4. Prueba el enlace público una vez más y envíaselo al profesor por el chat de Gmail.

## Notas
- La Public Key de EmailJS está pensada para ir en el frontend; en EmailJS puedes limitar los dominios permitidos (Security) a tu URL de GitHub Pages.
- El logo del correo usa la URL pública del brandbook, así se ve en cualquier bandeja.
- Si el correo no llega: abre la consola del navegador (F12) y revisa el error; lo más común es un ID mal copiado o el campo **To Email** sin `{{to_email}}`.
