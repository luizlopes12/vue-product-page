<template>
    <div class="access-denied-container">
      <header class="header">
        <p class="header-text">Acesso Negado</p>
      </header>
  
      <main class="content">
        <h2 class="title">Você não possui um token válido.</h2>
        <router-link to="/" class="back-button">Voltar para a página inicial</router-link>
      </main>
    </div>
  </template>
  
  <style scoped>
  .access-denied-container {
    background: #fdfbf4;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background: #f35422;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .header-text {
    font-weight: bold;
    font-size: 1rem;
  }
  
  .content {
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 2rem;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #202020;
    margin-bottom: 1.5rem;
  }
  
  .back-button {
    display: inline-block;
    padding: 0.6rem 2rem;
    background: #f35422;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    transition: background 0.2s ease;
  }
  
  .back-button:hover {
    background: #d84315;
  }
  </style>
  