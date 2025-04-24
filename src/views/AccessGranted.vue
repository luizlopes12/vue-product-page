<template>
    <div class="access-container">
      <header class="header">
        <p class="header-text">Acesso Liberado</p>
      </header>
  
      <main class="main-content">
        <div class="logout-wrapper">
            <button class="logout-btn" @click="logout">Sair</button>
        </div>

        <h2 class="title">Manual completo para a venda de produtos digitais</h2>

        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video Streaming"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
    
        <form @submit.prevent="submitForm" class="form">
            <p class="form-lead">Tenha acesso a conteúdos exclusivos</p>
            <input type="text" v-model="name" placeholder="Seu nome" required />
            <input type="email" v-model="email" placeholder="Seu email" required />
            <button type="submit" class="submit-btn">Enviar</button>
        </form>
      </main>
    </div>
  </template>
  
<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const name = ref('')
  const email = ref('')
  
  const route = useRoute()
  const router = useRouter()
  
  const logout = () => {
    localStorage.removeItem('access_granted')
    router.push('/')
  }
  
  const submitForm = () => {
    alert(`Olá ${name.value}, entraremos em contato em breve, fique de olho em seu email (${email.value})`)
  }
  
  const validateAccess = () => {
    const token = route.query.token
    const validToken = 'abc123'
  
    const alreadyGranted = localStorage.getItem('access_granted')
  
    if (token === validToken) {
      if (!alreadyGranted) {
        localStorage.setItem('access_granted', new Date().getTime())
      }
    } else if (!alreadyGranted) {
      router.replace('/access-denied')
    }
  }
  
  onMounted(validateAccess)
  
  watch(() => route.query.token, validateAccess)
</script>
  
  
  <style scoped>

    .form-lead {
        font-size: 1rem;
        font-weight: 500;
        color: #333;
        margin-bottom: 0.5rem;
    }

  .access-container {
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
  
  .cart {
    color: #421b00;
    font-weight: bold;
  }
  
  .main-content {
    text-align: center;
    padding: 1rem;
  }
  
  .title {
    max-width: 560px;
    font-size: 2rem;
    color: #202020;
    font-weight: 900;
    margin: 0 auto .5rem;
  }
  
  .title span {
    color: #202020;
  }
  
  .video-wrapper {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }
  
  iframe {
    width: 100%;
    max-width: 560px;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .logout-wrapper{
    display: flex;
    justify-content: start;
    margin: 0 auto;
    max-width: 560px;
  }
  
  .logout-btn {
    background: #f35422;
    color: #fff;
    font-size: .875rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  
  .logout-btn:hover {
    background: #d84315;
  }
  
  .form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  input {
    padding: 0.6rem 1rem;
    width: 300px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }
  
  .submit-btn {
    background: #f35422;
    color: white;
    font-weight: bold;
    padding: 0.6rem 2rem;
    width: 300px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  
  .submit-btn:hover {
    background: #d84315;
  }

  @media screen and (max-width: 768px){
    .title {
        max-width: 560px;
        font-size: 1.4rem;
        color: #202020;
        font-weight: 900;
        margin: 0 auto .5rem;
    }

    .form-lead{
        width: 90%;
    }

    input{
        width: 100%;
    }

    .submit-btn {
        width: 100%;
        padding: 1rem 2rem;
    }
  }
  </style>
  