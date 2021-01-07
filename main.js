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

const gradient = ctx.createLinearGradient(0, 0, 0, 70)
gradient.addColorStop('0.4', '#00FFFF')
gradient.addColorStop('0.5', '#0000FF')
gradient.addColorStop('0.55', '#8A2BE2')
gradient.addColorStop('0.6', '#5F9EA0')
gradient.addColorStop('0.9', '#7FFF00')

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  // ctx.fillRect(10, 10, 50, 50)
  handleObstacles()
  bird.update()
  bird.draw()
  ctx.fillStyle = gradient 
  ctx.font = '90px Georgia'
  ctx.strokeText(score, 450, 70)
  ctx.fillText(score, 450, 70)
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
    ctx.font = "25px Georgie"
    ctx.fillStyle = 'black'
    ctx.fillText('Game Over, Your score is ' + score, 160, canvas.height/2 -10)
  return true
  }
}
}