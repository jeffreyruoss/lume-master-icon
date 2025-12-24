import './style.css'
import lottie from 'lottie-web/build/player/lottie_svg'

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
loadLogo('v1-container', '/lottie-icon-v1.json')
loadLogo('v2-container', '/lottie-icon-v2.json')
loadLogo('v3-container', '/lottie-icon-v3.json')
loadLogo('v4-container', '/lottie-icon-v4.json')
loadLogo('v5-container', '/lottie-icon-v5.json')
loadLogo('v6-container', '/lottie-icon-v6-waveform.json')
loadLogo('v7-container', '/lottie-icon-v7.json')
loadLogo('v8-container', '/lottie-icon-v8.json')
loadLogo('v10-container', '/lottie-icon-v10.json')
loadLogo('v11-container', '/lottie-icon-v11.json')
loadLogo('v12-container', '/lottie-icon-v12.json')
loadLogo('v13-container', '/lottie-icon-v13.json')
loadLogo('v14-container', '/lottie-icon-v14.json')
