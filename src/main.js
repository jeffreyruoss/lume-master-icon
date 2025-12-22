import './style.css'
import lottie from 'lottie-web'

const loadLogo = (containerId) => {
  const container = document.getElementById(containerId)
  if (!container) return

  const anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/lottie-icon.json'
  })

  anim.addEventListener('error', (e) => {
    console.error(`Lottie error in ${containerId}:`, e)
  })
}

console.log('Loading Lottie animations...')
loadLogo('v1-container')
loadLogo('v2-container')

