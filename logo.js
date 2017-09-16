const h = require('izi/h')

const fx = h.div.style({
  background: '#9aedfe',
  position: 'fixed',
  height: '100px',
  width: '150px',
  display: 'inline-block',
  transform: 'translateY(-170px) scale(1.25) rotate(-6deg)',
  transition: 'transform 6s cubic-bezier(0, 1.3, 0, 1)',
})

module.exports = [
  fx,
  h.div.style({ transform: 'translateZ(0)' }, h.span.style({
    color: 'rgb(40, 42, 54)',
    fontSize: '50px',
    fontStyle: 'italic',
    fontWeight: 'bolder',
  }, 'AOS')),
]

setTimeout(() =>
  fx.style.transform = 'translateY(-70px) scale(1.25) rotate(2deg)')
