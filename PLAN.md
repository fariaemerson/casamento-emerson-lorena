# Plano de Estrutura - Site de Casamento (Emerson & Lorena)

**Tecnologia:** Next.js (App Router), React, Tailwind CSS

**Objetivo:** Criar um site estático, responsivo, minimalista e elegante com as cores Branco, Marsala e Marrom Amadeirado.

**Estrutura de Páginas/Seções (Componentes):**

1.  **`src/app/layout.tsx`:** Layout principal, definindo fontes, cores de fundo base (branco), e estrutura geral.
2.  **`src/app/page.tsx`:** Página principal que renderizará os componentes das seções.
3.  **`src/components/Navbar.tsx`:** Barra de navegação fixa ou no topo, com links para as seções.
4.  **`src/components/Hero.tsx`:** Seção inicial com foto principal, nomes (Emerson & Lorena), data (21/06/2026).
5.  **`src/components/Story.tsx`:** Seção "Nossa História" com área para texto (placeholder).
6.  **`src/components/EventDetails.tsx`:** Seção "O Evento" com informações de local (Recanto Santa Cecília), horário (09h), data. Incluir placeholder para mapa/link de direções.
7.  **`src/components/DressCode.tsx`:** Seção "Dress Code" com área para texto (placeholder).
8.  **`src/components/RSVP.tsx`:** Seção "Confirme sua Presença" com texto explicativo e placeholders para link e/ou QR Code do Google Forms.
9.  **`src/components/Gifts.tsx`:** Seção "Lista de Presentes" com texto explicativo, placeholders para link/QR Code do site externo e placeholders para informações de presente em dinheiro (Pix/Conta).
10. **`src/components/Footer.tsx`:** Rodapé simples (opcional).

**Estilo e Responsividade:**

*   **Cores:** Configurar `tailwind.config.ts` com as cores Marsala e Marrom Amadeirado para fácil aplicação.
    *   `marsala: '#800020'` (Exemplo, ajustar tom se necessário)
    *   `woodBrown: '#A0522D'` (Exemplo, ajustar tom se necessário)
*   **Layout:** Usar Flexbox e Grid do Tailwind para estrutura. Priorizar layout de coluna única em mobile, expandindo para múltiplas colunas em telas maiores onde apropriado.
*   **Fontes:** Escolher fontes elegantes e legíveis (ex: via Google Fonts configurado no Next.js).
*   **Minimalismo:** Evitar excesso de elementos visuais. Focar em tipografia, espaçamento e uso estratégico das cores.

**Placeholders:**

*   Texto "Nossa História": `[Texto sobre nossa história aqui...]`
*   Fotos: Usar imagens genéricas de placeholder (`https://via.placeholder.com/...`) inicialmente.
*   Link Mapa: `[Link para o mapa/direções aqui]`
*   Texto Dress Code: `[Detalhes sobre o traje aqui...]`
*   Link RSVP: `[Link para Google Forms RSVP aqui]`
*   QR Code RSVP: `[Placeholder para imagem QR Code RSVP]`
*   Link Lista Presentes: `[Link para site da lista de presentes aqui]`
*   QR Code Lista Presentes: `[Placeholder para imagem QR Code Lista]`
*   Info Presente Dinheiro: `[Chave Pix: ...]`, `[Dados Bancários: ...]`

**Próximo Passo:** Implementar a estrutura base e as seções com os placeholders no projeto Next.js criado em `/home/ubuntu/casamento-emerson-lorena/`.
