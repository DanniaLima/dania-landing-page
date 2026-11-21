"use strict";

/*
 * Dannia Lima — Tech + bem-estar
 *
 * Mantém os nomes das cores usados no HTML.
 * Carregar depois do Tailwind CDN.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Texto: cinza-azulado escuro
        ink: "#334155",

        // Títulos, botões e contraste principal
        forest: "#182d48",

        // Verde de bem-estar
        leaf: "#28786b",

        // Superfícies verdes suaves
        sage: "#e8f2ed",

        // Fundo claro levemente azulado
        cream: "#f8fafc",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],

        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
      },

      boxShadow: {
        soft: "0 18px 48px -28px rgba(24, 45, 72, 0.24)",
      },
    },
  },
};
