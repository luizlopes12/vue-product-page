# 👜 Clothbagss - Mini Funil com Controle de Acesso

**Desenvolvido para o desafio técnico da Inove Corp - Processo Seletivo Pleno (Fase 2)**  
🔗 Acesse o projeto em produção: [clothbagss.vercel.app](https://clothbagss.vercel.app)

---

## 🚀 Desafio

O objetivo do desafio foi simular uma entrega digital real dentro de um funil de vendas. Este funil é dividido em 3 etapas, conforme descrito abaixo.

---

## ✅ Etapas do Projeto

### 1. Landing Page do Produto
- Headline atrativa
- Imagem/mockup representando o produto
- Botão de “Comprar Agora”
- Layout responsivo (mobile e desktop)

### 2. Simulação do Processo de Compra
- Ao clicar no botão, o usuário é redirecionado para a página de Acesso Liberado
- Essa página é protegida por **validação simples de token** (via URL: `?token=abc123`)
- Sem o token correto, o usuário é redirecionado para a página de Acesso Negado

### 3. Entrega do Produto (Página Protegida)
- Nome do produto
- Link de download/streaming de conteúdo (simulado)
- Botão de sair (logout ou voltar para a landing)
- **Bônus:** Formulário com nome e email, simulando envio para um backend/Zapier
- Acesso ao conteúdo protegido é mantido por 24h via `localStorage`

---

## 🧑‍💻 Tecnologias Utilizadas

- **Vue.js 3** (Composition API)
- **Vue Router** para controle de rotas e proteção de acesso
- **HTML/CSS Responsivo** (com media queries)
- **LocalStorage** para simular sessões e controle de tempo de acesso
- **Vercel** para deploy da aplicação

---

## 🕓 Tempo de Desenvolvimento

Desenvolvido em aproximadamente **48 horas**, conforme sugerido no enunciado do desafio.

---

## 📦 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/clothbagss.git
cd clothbagss

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
