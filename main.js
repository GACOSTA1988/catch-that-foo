const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 600
canvas.height = 400

let spacePressed = false
let angle = 0
let hue = 0
let frame = 0
let score = 0
let gamespeed = 2

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  // ctx.fillRect(10, 10, 50, 50)
  handleObstacles()
  bird.update()
  bird.draw()
  handleParticles()
  handleCollisions()
  if (handleCollisions()) return
  requestAnimationFrame(animate)
  angle+= 0.12
  hue++
  frame++
}
animate()

window.addEventListener('keydown', function(e){
  if (e.code === "Space") spacePressed = true
})
window.addEventListener('keyup', function(e){
  if (e.code === "Space") spacePressed = false
})

const bang = new Image()
bang.src = 'bang.png'
function handleCollisions(){
for (let i = 0; i < obstablesArray.length; i++){
  if (bird.x < obstablesArray[i].x + obstablesArray[i].width && bird.x + bird.width > obstablesArray[i].x && ((bird.y < 0 + obstablesArray[i].top && bird.y + bird.height > 0) || ( bird.y > canvas.height - obstablesArray[i].bottom && bird.y + bird.height < canvas.height))){
    ctx.drawImage(bang, bird.x, bird.y, 50, 50)
  return true
  }
}
}