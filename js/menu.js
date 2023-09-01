import {body} from "./selectors.js" 

const modal = document.createElement("dialog");

export function gameOverModal() { 
  const closeBtn = document.createElement('button')  
  closeBtn.addEventListener("click", () => {
   modal.close()
   window.location.reload()
  })
  closeBtn.classList.add('closeModal')
  closeBtn.textContent = "Play Again" 
  modal.show()
  modal.appendChild(closeBtn)
  body.appendChild(modal)

}

