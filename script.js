// ============================================================
// 1) PEGA AQUÍ TUS CREDENCIALES DE EMAILJS
//    - Public Key: Account > General
//    - Service ID: Email Services
//    - Template ID: Email Templates
// ============================================================
const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const form = document.getElementById("form-suscripcion");
const inputEmail = document.getElementById("email");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
  mensaje.hidden = false;
}

function correoValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const correo = inputEmail.value.trim();

  if (!correoValido(correo)) {
    mostrarMensaje("Escribe un correo válido, por ejemplo nombre@empresa.com.", "error");
    inputEmail.focus();
    return;
  }

  boton.disabled = true;
  boton.textContent = "Enviando...";
  mensaje.hidden = true;

  try {
    // Estas variables deben coincidir con las de la plantilla en EmailJS
    // (el campo "To Email" de la plantilla debe ser {{to_email}}).
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: correo,
      email: correo
    });

    mostrarMensaje("¡Suscripción exitosa! Revisa tu correo: te enviamos un mensaje de bienvenida.", "ok");
    form.reset();
  } catch (error) {
    console.error("Error EmailJS:", error);
    mostrarMensaje("No pudimos completar tu suscripción. Intenta de nuevo en unos minutos.", "error");
  } finally {
    boton.disabled = false;
    boton.textContent = "Suscribirme";
  }
});
