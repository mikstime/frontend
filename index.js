// Method 1
// Создается элемент, с большим z-index, чем у остальных элементов,
// исключая тот, который необходимо скрыть
// При нажатии на него убирается нужный элемент
// При нажатии на нужный останавливается пропагнация ивента
const mask = document.getElementById('mask')
const button2 = document.getElementById('button2')
const hideButton2 = (e) => button2.style.display = 'none'

mask.addEventListener( 'click', hideButton2 )
button2.addEventListener('click', e => e.stopPropagation() )
// Method 2
// При нажатии на контейнер проверяется, является ли элемент, который нужно скрыть
// таргетом ивента. Если нет, то скрываем элемент
const holder = document.getElementById('holder')
const button1 = document.getElementById('button1')

const hideButton1 = (e) => {
  if( e.target !== button1 )
    button1.style.display = 'none'
}
holder.addEventListener('click', hideButton1, false)