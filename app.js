const h = require('izi/h')

const logo = require('./logo')
const centred = h.style({
  textAlign: 'center',
  whiteSpace: 'pre',
  opacity: 0,
  transform: 'translateX(-800px) scale(1) rotate(-2deg)',
  transition: 'all 4s cubic-bezier(0, 1, 0, 1)',
  textShadow: '2px 2px 11px #292b37',
})


if (!window.app) {
  document.body.appendChild(window.app = h.div.style({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }))
}

const titleText = centred.style({
  color: '#5af78e',
  fontSize: '58px',
  transform: 'translateX(-500px) scale(0.75) rotate(-2deg)',
}, 'All Open Source')

const messageTop = centred.style({
  color: '#caa9fa',
  fontSize: '38px',
  transform: 'translateX(-650px) scale(0.75) rotate(-2deg)',
}, `Soyez libre d'apprendre`)

const messageBottom = centred.style({
  color: '#caa9fa',
  fontSize: '34px',
  transform: 'translateX(-800px) scale(0.75) rotate(-2deg)',
}, `les technologies de demain`)

const fadeIn = ({ style }) => {
  style.transform = 'translateX(0) scale(1) rotate(-2deg)'
  style.opacity = 1
}

setTimeout(() => fadeIn(titleText), 25)
setTimeout(() => fadeIn(messageTop), 125)
setTimeout(() => fadeIn(messageBottom), 250)

const vid = h.video({
  control: true,
  autoplay: true,
  loop: true,
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    overflow: 'hidden',
    opacity: 0.45,
    backgroundColor: '#48595f',
    backgroundImage: 'url("/out.jpg")',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
  },
}, [
  h.source({ src: '/out.webm', type: 'video/webm; codecs=vp9,vorbis' }),
  h.source({ src: '/out.mp4', type: 'video/mp4' }),
])

vid.name = 'media'
// 48595f average image color
h.replaceContent(window.app, [
  vid,
  h.div.style({
    height: '100%',
    width: '100%',
    position: 'absolute',
    boxShadow: '0px 0px 500px 80px #292b37 inset',
  }),
  logo,
  titleText,
  messageTop,
  messageBottom,
])

