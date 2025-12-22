import './style.css'
import lottie from 'lottie-web'

const animations = []
let isLooping = false

const loadLogo = (containerId, animationPath) => {
  const container = document.getElementById(containerId)
  if (!container) return

  const anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: animationPath
  })

  anim.addEventListener('error', (e) => {
    console.error(`Lottie error in ${containerId}:`, e)
  })

  animations.push(anim)
}

const replayAll = () => {
  animations.forEach(anim => {
    anim.goToAndPlay(0, true)
  })
}

const toggleLoopAll = (e) => {
  isLooping = e.target.checked

  animations.forEach(anim => {
    anim.loop = isLooping
    if (isLooping && anim.isPaused) {
      anim.play()
    }
  })
}

document.getElementById('replay-btn').addEventListener('click', replayAll)
document.getElementById('loop-toggle').addEventListener('change', toggleLoopAll)

console.log('Loading Lottie animations...')
loadLogo('v1-container', '/lottie-icon.json')
loadLogo('v2-container', '/lottie-icon-v2.json')

