document.addEventListener("DOMContentLoaded", () => {
  const part1 = document.getElementById("tw-part1");
  const part2 = document.getElementById("tw-part2");
  const part3 = document.getElementById("tw-part3");

  const subtitleEl = document.getElementById("typewriter-subtitle");
  const codeEl = document.getElementById("typewriter-code");

  const text1 = "Ciao, sono ";
  const text2 = "Dannia Lima!"; // Vai ficar verde por causa do HTML
  const emoji = " 👋"; // O espaço antes é importante

  const subtitleText =
    "Sviluppatrice in formazione, brasiliana in Italia e appassionata di benessere.";
  const codeText = "< più equilibrio, una riga alla volta />";

  // Função para digitar
  function typeText(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '<span class="typewriter-cursor"></span>';

    function type() {
      if (i < text.length) {
        element.innerHTML =
          text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
        i++;
        setTimeout(type, speed);
      } else {
        element.innerHTML = text;
        if (callback) callback();
      }
    }
    setTimeout(type, 500);
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    part1.textContent = text1;
    part2.textContent = text2;
    part3.textContent = emoji;
    subtitleEl.textContent = subtitleText;
    codeEl.textContent = codeText;
  } else {
    // Digita "Ciao, sono " (velocidade 100)
    typeText(part1, text1, 60, () => {
      // Digita "Dannia Lima!" (velocidade 100)
      typeText(part2, text2, 60, () => {
        // Coloca o emoji instantaneamente no final (para não bugar)
        part3.innerHTML = emoji;

        // Começa a digitar o subtítulo
        typeText(subtitleEl, subtitleText, 30, () => {
          // Começa a digitar o código
          typeText(codeEl, codeText, 40, null);
        });
      });
    });
  }
});
