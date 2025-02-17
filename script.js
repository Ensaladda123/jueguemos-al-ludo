const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!? ";
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

// Mensaje que se va a formar
const mensaje = "JUGAMOS UN LUDO?";
const mensajeColumnas = Math.floor((canvas.width / fontSize - mensaje.length) / 2);

// Bandera para controlar el cambio de efecto
let mostrarMensaje = false;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        if (mostrarMensaje && i >= mensajeColumnas && i < mensajeColumnas + mensaje.length) {
            // Si estamos en la zona del mensaje, alineamos las letras
            const index = i - mensajeColumnas;
            ctx.fillText(mensaje[index], i * fontSize, canvas.height / 2);
        } else {
            // Letras normales cayendo
            if (Math.random() > 0.9) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i] += 2;
            }

            // Reiniciar la caída si llega al final de la pantalla
            if (drops[i] * fontSize > canvas.height) {
                drops[i] = 0;
            }
        }
    }
}

// Iniciar animación Matrix
let interval = setInterval(drawMatrix, 30);

// A los 10 segundos, formar el mensaje
setTimeout(() => {
    mostrarMensaje = true;
}, 5000);
