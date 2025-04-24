<template>
    <div class="landing">
      <header class="header">
        <p class="header-text">Promoção exclusiva, acaba em {{ minutesCounter }} </p>
      </header>
  
      <main class="main-content">
        <div class="title-container">
            <h1 class="title">Cloth<span>Bags</span></h1>
            <h3 class="subtitle">Manual completo para a venda de produtos digitais</h3>
        </div>

        <div class="products">
          <img src="/bag-3.png" alt="Green Bag" class="product" />
          <img src="/bag-2.png" alt="Black Bag" class="product main" />
          <img src="/bag-1.png" alt="Red Bag" class="product" />
        </div>

        <button class="buy-btn" @click="handleBuy">Compre Agora!</button>
      </main>
    </div>
  </template>
  
<script setup>
  import { useRouter } from 'vue-router'
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  
  const router = useRouter()
  const totalSeconds = 30 * 60
  const secondsLeft = ref(totalSeconds)
  let interval = null
  
  const handleBuy = () => {
    router.push('/access-granted?token=abc123')
  }
  
  const saveToLocalStorage = (value) => {
    const expiresAt = Date.now() + value * 1000
    localStorage.setItem('promo_timer_expires', expiresAt)
  }
  
  const loadFromLocalStorage = () => {
    const expiresAt = localStorage.getItem('promo_timer_expires')
    if (!expiresAt) return totalSeconds
  
    const diff = Math.floor((Number(expiresAt) - Date.now()) / 1000)
    return diff > 0 ? diff : 0
  }
  
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }
  
  const startCountdown = () => {
    secondsLeft.value = loadFromLocalStorage()
  
    interval = setInterval(() => {
      if (secondsLeft.value > 0) {
        secondsLeft.value--
        saveToLocalStorage(secondsLeft.value)
      } else {
        secondsLeft.value = totalSeconds
        saveToLocalStorage(totalSeconds)
      }
  
      // Atualiza o título da aba do navegador
      document.title = `⏳ ${formatTime(secondsLeft.value)} - Curso imperdível!`
    }, 1000)
  }
  
  onMounted(() => {
    document.title = `⏳ ${formatTime(secondsLeft.value)} - Curso imperdível!`
    startCountdown()
  })
  
  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })
  
  const minutesCounter = computed(() => {
    return formatTime(secondsLeft.value)
  })
</script>
  
  
  
  <style scoped>
  .landing {
    background: #fdfbf4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header {
    width: 100%;
    background: #f35422;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
  }
  
  .header-text {
    font-size: 0.9rem;
    text-align: center;
    margin: auto
    ;
  }
  
  .menu,
  .cart {
    color: #421b00;
    font-size: 1rem;
  }
  
  .main-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  .title-container{
    display: flex;
    flex-direction: column;
  }
  
  .title {
    font-size: 3rem;
    font-weight: 900;
    color: #f35422;
    text-shadow: 2px 2px #000;
  }

  .subtitle{
    color: #202020;
  }
  
  .title span {
    color: #202020;
  }
  
  .products {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    filter: drop-shadow(0px 10px 7px #9c9c9c);
  }
  
  .product {
    width: 300px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .product:nth-of-type(2){
    animation: float 12s ease-in-out infinite;
  }

  .product:nth-of-type(1), .product:nth-of-type(3){
    animation: float 11.5s ease-in-out infinite;
  }

  @keyframes float {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0);
        }
    }
  
  .product.main {
    transform: scale(1.1);
  }
  
  .buy-btn {
    background: #f35422;
    color: #fff;
    font-weight: bold;
    font-size: 1.1rem;
    width: fit-content;
    margin: auto;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  
  .buy-btn:hover {
    background: #d84315;
  }

  @media screen and (max-width: 768px){
    .main-content {
        width: 100%;
    }
    .products {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 calc(50% - 100px); /* metade da largura do container menos metade do produto (200px / 2) */
    padding: 1rem 0;
  }

  .product {
    flex: 0 0 auto;
    width: 200px;
    scroll-snap-align: center;
  }

    .buy-btn{
        width: 90%;
        padding: 1rem 2rem;
    }
  }

  </style>
  