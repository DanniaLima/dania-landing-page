"use strict";

/*
 * Dannia Lima — Configuração do Tailwind Play CDN
 *
 * Carregar depois do script:
 * https://cdn.tailwindcss.com
 *
 * Cores, fontes e sombra originais preservadas.
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#202923",
        forest: "#14251d",
        leaf: "#407052",
        sage: "#e8eee5",
        cream: "#fafbf8",
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
        soft: "0 16px 50px -24px rgba(20, 37, 29, 0.2)",
      },
    },
  },
};
