document.addEventListener('keydown',(event)=>{
  const dino =  document.getElementById("dino")
  if (event.key === " "){
    dino.style.transform = `translateY(-60px)`
  }
  setTimeout(() => {
    dino.style.transform = `translateY(0)`
  }, 300);
  
})

