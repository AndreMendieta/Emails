// EmailJS: en el panel de EmailJS restringe el uso a tu dominio (Security > Allowed domains)
const PUBLIC_KEY  = "JIAaVCRmoiWNbwFtO";
const SERVICE_ID  = "service_bq6mjat";
const TEMPLATE_ID = "template_3fvmpii";

emailjs.init({ publicKey: PUBLIC_KEY });

const form = document.getElementById("form");
const input = document.getElementById("email");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

function show(text, type) {
  msg.textContent = text;
  msg.className = type;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = input.value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    show("Escribe un correo válido, por ejemplo nombre@correo.com.", "err");
    input.focus();
    return;
  }

  btn.disabled = true;
  btn.textContent = "Enviando…";
  show("", "");

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, { to_email: email });
    show("¡Suscripción exitosa! Revisa tu bandeja de entrada (y el spam).", "ok");
    form.reset();
  } catch (err) {
    console.error(err);
    show("Error " + (err.status || "") + ": " + (err.text || err.message || err), "err");
  } finally {
    btn.disabled = false;
    btn.textContent = "Suscribirme";
  }
});
