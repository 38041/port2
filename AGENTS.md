# AGENTS.md — Diretrizes para Agentes de IA

Este documento orienta agentes de inteligência artificial que trabalham no código e na evolução do portfólio de **Alessa Rovigatti**.

---

## 1. Objetivo do Projeto
Desenvolver e manter o portfólio pessoal de **Alessa Rovigatti**, estudante de tecnologia. O site deve ser moderno, criativo, elegante, altamente responsivo e apresentar sua identidade, habilidades, projetos reais desenvolvidos e formas de contato direto.

O resultado deve transmitir o rigor estético e a sutileza de um trabalho autoral de design de interfaces profissional, afastando-se categoricamente de qualquer padrão de template automatizado ("cara de IA").

---

## 2. Identidade Visual e Atmosfera
- **Inspiração Principal:** ERA Residence (https://www.era-residence.com/).
  - Azul profundo (#173F78) evocando céu aberto na abertura hero.
  - Tipografia de impacto, proporções amplas e elegantes ("ALESSA ROVIGATTI").
  - Transição escultural orgânica em azul-claro acinzentado (#B6CDDA) entre seções.
  - Seções em off-white (#F5F4EC) com toques naturais de flores rosa (buganvílias) nos cantos, títulos em azul quase preto (#17283C).
- **Tipografia:**
  - Títulos: *Space Grotesk* (proporções geométricas e editoriais fortes).
  - Textos de leitura e navegação: *Inter* (clareza, legibilidade e ritmo).
- **Paleta Restrita e Obrigatória:**
  - Azul profundo: `#173F78`
  - Off-white: `#F5F4EC`
  - Azul-claro acinzentado: `#B6CDDA`
  - Rosa-floral: `#EC3D9B`
  - Azul quase preto: `#17283C`
  - Cinza suave: `#737B82`

---

## 3. Convenções de Código
1. **Padrão Vanilla Elegante:** HTML5 semântico, CSS3 moderno (Custom Properties, Flexbox, CSS Grid) e JavaScript nativo limpo e modular.
2. **Zero Invenção de Conteúdo:**
   - Nunca inventar experiências profissionais inexistentes, certificados falsos ou métricas artificiais (como "50+ clientes atendidos").
   - Utilizar apenas os projetos confirmados: TCC Andermaq, Jadlog, LP iFood, Currículo Online e Carrinho de Compras.
   - Preservar os links reais fornecidos. O TCC Andermaq possui apenas repositório GitHub; não inventar URL de demonstração.
   - Contato: apenas GitHub (`https://github.com/38041`) e E-mail (`38041@raphaeldisanto.com.br`). Nunca inventar perfis de LinkedIn ou Instagram.
3. **Formulário de Contato:**
   - Validação semântica e amigável.
   - Na ausência de backend configurado, jamais fingir que o e-mail foi enviado por servidor fictício. Acionar o cliente de e-mail via `mailto:` ou notificar de forma totalmente transparente.

---

## 4. Regras Anti-Template IA
- Não utilizar o esquema repetitivo de cards idênticos em grid 3x3 com ícones centrais em círculos coloridos.
- Proibido o uso de gradientes roxo-neon/ciano, sombras pesadas e emojis decorativos em botões ou títulos.
- As flores rosa devem ser fotografias reais de buganvílias tratadas com delicadeza visual, nunca emojis ou ilustrações caricatas.
- Manter respiro e espaços em branco generosos característicos do design editorial.

---

## 5. Etapas de Validação
Ao efetuar alterações no projeto:
1. Verificar integridade estrutural no desktop (1440px, 1024px) e no mobile (768px, 390px, 320px).
2. Assegurar ausência de rolagem horizontal indesejada (`overflow-x`).
3. Validar se a alternância de Modo Claro / Modo Escuro persiste no `localStorage` e mantém a fidelidade visual das cores primárias.
4. Testar funcionamento de todos os links externos com atributos `target="_blank"` e `rel="noopener noreferrer"`.
5. Respeitar `prefers-reduced-motion` para usuários sensíveis a animações.
