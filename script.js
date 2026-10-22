const surpriseButton = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");
const tabs = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".gift-panel");
const toast = document.getElementById("toast");

surpriseButton.addEventListener("click", () => {
  surprise.classList.add("show");
  surpriseButton.textContent = "💗 ¡Regalo abierto!";
  surpriseButton.disabled = true;
  surprise.scrollIntoView({ behavior: "smooth", block: "start" });
  createConfetti();
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === tab.dataset.panel);
    });
  });
});

document.getElementById("wishButton").addEventListener("click", (event) => {
  toast.classList.add("show");
  event.currentTarget.textContent = "¡Deseo pedido! 💛";
  createConfetti(36);
  window.setTimeout(() => toast.classList.remove("show"), 2800);
});

function createConfetti(amount = 70) {
  const symbols = ["🌻", "💗", "✨", "🌸", "💕", "🌷"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.fontSize = `${14 + Math.random() * 18}px`;
    piece.style.animationDelay = `${Math.random() * 1.2}s`;

    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4800);
  }
}

// Movimiento sutil de las flores decorativas al mover el cursor.
document.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 8;
  const y = (event.clientY / window.innerHeight - 0.5) * 8;

  document.querySelectorAll(".flower").forEach((flower, index) => {
    const strength = (index + 1) * 0.25;
    flower.style.translate = `${x * strength}px ${y * strength}px`;
  });
});