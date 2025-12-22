import './style.css'
import lottie from 'lottie-web'

const container = document.getElementById('lottie-container')

console.log('Loading Lottie animation...')

const anim = lottie.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/lottie-icon.json'
})

anim.addEventListener('DOMLoaded', () => {
  console.log('Lottie animation loaded successfully')
})

anim.addEventListener('error', (e) => {
  console.error('Lottie error:', e)
})

