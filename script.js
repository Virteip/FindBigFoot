function loadBigFoot()
{
  document.getElementById('bigFoot').src = 'bigfoot.png'
}

function moveBigFoot()
{
  alert("Woohoo, you win! You found Bigfoot!");
  let picture = document.getElementById('bigFoot')
  let x = Math.random() * 300
  let y = Math.random() * 300
  picture.style.top = x + 'px'
  picture.style.left = y + 'px'
}