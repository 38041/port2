# Portfólio Pessoal — Alessa Rovigatti

Portfólio moderno, criativo, elegante e editorial de **Alessa Rovigatti**, estudante de tecnologia. O projeto foi projetado com foco em tipografia de impacto, composição visual assimétrica, atmosfera estética inspirada na arquitetura contemporânea e código semântico puro.

---

## 🎨 Identidade Visual e Atmosfera

- **Inspiração Central:** *ERA Residence* (composição de céu azul profundo, transições esculturais e seções claras com flores naturais) complementada pela navegação fluida de *Belgrade Arbor* e o rigor editorial de *Format / Obys*.
- **Paleta de Cores:**
  - Azul Profundo: `#173F78`
  - Off-white Editorial: `#F5F4EC`
  - Azul-claro Acinzentado: `#B6CDDA`
  - Rosa-floral (Buganvília): `#EC3D9B`
  - Azul Quase Preto: `#17283C`
  - Cinza Suave: `#737B82`
- **Tipografia:** `Space Grotesk` (títulos e números) e `Inter` (textos de leitura).

---

## 📂 Estrutura de Arquivos

```text
portfolio-alessa/
├── index.html              # Estrutura semântica HTML5 completa
├── style.css               # Estilos, variáveis CSS, modo escuro e responsividade
├── script.js               # Navegação, tema, animações e validação do formulário
├── AGENTS.md               # Diretrizes para evolução do projeto por IA
├── referencias.md          # Documentação em 1ª pessoa das escolhas estéticas
├── identidade.md           # Guia de estilo, cores, tipografia e tom de voz
├── funcionalidades.md      # Checklist detalhado de implementação
├── README.md               # Instruções de execução e deploy
└── assets/
    ├── images/             # Fotografias reais e capturas de tela dos projetos
    └── icons/              # Ícones vetoriais de suporte
```

---

## 🚀 Como Executar Localmente

### Opção 1: Abrir diretamente no Navegador
Dê um duplo clique no arquivo `index.html` ou abra-o em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

### Opção 2: Servidor Local Simples (Live Server / Python / Node)
Se preferir utilizar um servidor de desenvolvimento:

- **Via Python:**
  ```bash
  python -m http.server 3000
  ```
  Acesse: `http://localhost:3000`

- **Via Node.js (npx serve):**
  ```bash
  npx serve .
  ```

- **Via extensão VS Code / Antigravity:**
  Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

---

## 🌐 Como Publicar no GitHub e na Vercel

### 1. Criar repositório no GitHub
1. Acesse sua conta no [GitHub](https://github.com/).
2. Clique no botão **New** para criar um novo repositório (ex.: `portfolio-alessa`).
3. Deixe o repositório como **Public** e não inicialize com README (já temos todos os arquivos).
4. No terminal, dentro da pasta `portfolio-alessa`:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio editorial Alessa Rovigatti"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/portfolio-alessa.git
   git push -u origin main
   ```

### 2. Importar e Publicar na Vercel (Gratuito)
1. Acesse [vercel.com](https://vercel.com/) e faça login (pode usar sua conta do GitHub).
2. No painel principal, clique em **Add New...** > **Project**.
3. Localize e selecione o repositório `portfolio-alessa` na lista do GitHub e clique em **Import**.
4. Nas configurações do projeto:
   - **Framework Preset:** *Other* (HTML/CSS/JS estático puro).
   - **Root Directory:** `./` (ou selecione a pasta caso tenha enviado dentro de outro repositório).
5. Clique em **Deploy**.
6. Em menos de 1 minuto, a Vercel gerará o link oficial e seguro com certificado HTTPS.

### 3. Testes pós-publicação
- Abra a URL gerada pela Vercel em seu computador e em seu celular.
- Teste a rolagem suave das âncoras (Início, Sobre mim, Projetos, Contato).
- Clique no botão de alternância de tema no cabeçalho (sol/lua) e recarregue a página para confirmar a persistência do modo claro/escuro.
- Teste os links dos projetos confirmados (TCC Andermaq, Jadlog, LP iFood, Currículo Online e Carrinho de Compras).
- Verifique o formulário de contato e confirme a abertura do seu aplicativo de e-mail.
