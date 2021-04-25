//helper funcion to modify the DOM
export const modFox = function modFox(state) {
  document.querySelector('.fox').className = `fox fox-${state}`;

}

export const modScene = function modeScene(state) {
  document.querySelector('.game').className = `game ${state}`;
}


export const togglePoppBag = function togglePoppBag(show) {
  document.querySelector('.poop-bag').classList.toggle('hidden', !show);
}

export const writeModal = function writeModal(text = "") {
  document.querySelector('.modal').innerHTML = `<div class = "modal-inner">${text}</div>`
}
