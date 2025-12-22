import './style.css'
import lottie from 'lottie-web'

const animations = []
let isLooping = localStorage.getItem('lume-loop-enabled') === 'true'

const loadLogo = (containerId, animationPath) => {
  const container = document.getElementById(containerId)
  if (!container) return

  const anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: isLooping,
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
  localStorage.setItem('lume-loop-enabled', isLooping)

  animations.forEach(anim => {
    anim.loop = isLooping
    if (isLooping && anim.isPaused) {
      anim.play()
    }
  })
}

const loopToggle = document.getElementById('loop-toggle')
if (loopToggle) {
  loopToggle.checked = isLooping
}

document.getElementById('replay-btn').addEventListener('click', replayAll)
loopToggle.addEventListener('change', toggleLoopAll)

// Tutorial Logic
const tutorialBox = document.getElementById('tutorial-box')
const dismissBtn = document.getElementById('dismiss-tutorial')

if (!localStorage.getItem('lume-tutorial-dismissed')) {
  tutorialBox.classList.remove('hidden')
}

dismissBtn.addEventListener('click', () => {
  tutorialBox.classList.add('hidden')
  localStorage.setItem('lume-tutorial-dismissed', 'true')
})

console.log('Loading Lottie animations...')
loadLogo('v1-container', '/lottie-icon.json')
loadLogo('v2-container', '/lottie-icon-v2.json')
loadLogo('v3-container', '/lottie-icon-v3.json')

