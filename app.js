

const login = document.querySelector('#loginBtn')
const loginBurger = document.querySelector('#loginBtn2')
const loginPopUP =  document.querySelector('#loginPopUP')
const SignUpPopUP =  document.querySelector('#SignUpPopUP')
const popUpContent =  document.querySelector('.pop-up-content')
const background = document.querySelector('.pop-up-container')
const toRegister = document.querySelector('#toRegister')
const toLogIn = document.querySelector('#toLogIn')


login.addEventListener('click',(e) =>{
    e.preventDefault()
    loginPopUP.classList.toggle('login-display');
})

loginBurger.addEventListener('click',(e) =>{
    e.preventDefault()
    loginPopUP.classList.toggle('login-display');
})

background.addEventListener('click',(e) =>{
    if( e.target === background){
        loginPopUP.classList.toggle('login-display')
    } 
})

function changePopUp(e){
     e.preventDefault()
    loginPopUP.classList.toggle('login-display');
    SignUpPopUP.classList.toggle('sign-up-display');
}
toRegister.addEventListener('click',changePopUp)
toLogIn.addEventListener('click',changePopUp)


// navigation ======================================

const menuLinks= document.querySelectorAll('[data-goto]')

function  menuSmoothScroll(e){
        const menuLink= e.target;
        if(document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.offsetTop - 90
            
            window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                 });
              e.preventDefault()    
              showBurger.classList.remove('burger-nav-active');
        }
}

menuLinks.forEach(link => {
        link.addEventListener('click', menuSmoothScroll)
 })


// burger ==========================================

let showBurger = document.querySelector('#burger')
let burgerOpenButton = document.querySelector('#burgerOpen')
let burgerCloseButton = document.querySelector('#burgerClose')

function toggleBurger(e){
    e.preventDefault()
    showBurger.classList.toggle('burger-nav-active');
}
burgerOpenButton.addEventListener('click', toggleBurger)
burgerCloseButton.addEventListener('click', toggleBurger)


// slider

const arrowLeft = document.querySelector('.arrow-left'); // стрелка влево
const arrowRight = document.querySelector('.arrow-right'); // стрелка вправо
const slider = document.querySelector('.slider'); // обвертка слайдера
const item0 = document.querySelector('#item-0'); //слайды
const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');
const item4 = document.querySelector('#item-4');
const sliderItem = document.querySelectorAll('.slider-item'); // кружки - указатели

const moveLeft = () => { // функция анимации влево
	slider.classList.add('transition-left'); // навешиваем анимацию
	arrowLeft.removeEventListener('click', moveLeft); // отключаем прослушку на время анимации
	arrowRight.removeEventListener('click', moveRight); // отключаем прослушку на время анимации
	itemLeft(); // запуск функции слайдера влево
}

const moveRight = () => { // функция анимации вправо
	slider.classList.add('transition-right'); // навешиваем анимацию
	arrowRight.removeEventListener('click', moveRight); // отключаем прослушку на время анимации
	arrowLeft.removeEventListener('click', moveLeft); // отключаем прослушку на время анимации
	itemRight(); // запуск функции слайдера вправо
}

function itemLeft() { //меняем цвет кружков при сдвиге влево
	for (let i = 0; i < sliderItem.length; i++) { // цикл сдвига от количества кружков
		// выбираем текущий активный и в зависимости от положения навешиваем активный на следующий кружок
		if (sliderItem[i] == document.querySelector('.slider__item_active')) {
			if (i == 0) {
				sliderItem[0].classList.remove('slider__item_active')
				sliderItem[2].classList.add('slider__item_active')
				return
			} else if (i == 1) {
				sliderItem[1].classList.remove('slider__item_active')
				sliderItem[0].classList.add('slider__item_active')
				return
			} else {
				sliderItem[2].classList.remove('slider__item_active')
				sliderItem[1].classList.add('slider__item_active')
				return
			}
		}
	}
}

function itemRight() { //меняем цвет кружков при сдвиге вправо
	for (let i = 0; i < sliderItem.length; i++) { // цикл сдвига от количества кружков
		// выбираем текущий активный и в зависимости от положения навешиваем активный на предыдущий кружок
		if (sliderItem[i] == document.querySelector('.slider__item_active')) {
			if (i == 0) {
				sliderItem[0].classList.remove('slider__item_active')
				sliderItem[1].classList.add('slider__item_active')
				return
			} else if (i == 1) {
				sliderItem[1].classList.remove('slider__item_active')
				sliderItem[2].classList.add('slider__item_active')
				return
			} else {
				sliderItem[2].classList.remove('slider__item_active')
				sliderItem[0].classList.add('slider__item_active')
				return
			}
		}
	}
}

// навешиваем прослушку и запускаем функции:
arrowLeft.addEventListener('click', moveLeft); // на стрелки в мобильном
arrowRight.addEventListener('click', moveRight);
item1.addEventListener('click', moveLeft); // на слайды в десктопе
item3.addEventListener('click', moveRight);
// работа слайдера, перестановка слайдтов после сдвига
slider.addEventListener('animationend', (animation) => { // слушаем куда был сдвиг
	let itemBox = item2.innerHTML // активный слайдер
	if (animation.animationName === 'move-left') { // если была анимация влево
		slider.classList.remove('transition-left') // заканчиваем анимацию
		item2.innerHTML = item1.innerHTML // перетасовывам слайды
		item1.innerHTML = item0.innerHTML
		item3.innerHTML = itemBox
		item0.innerHTML = itemBox
		item4.innerHTML = item1.innerHTML
	} else { // иначе была анимация вправо
		slider.classList.remove('transition-right') // заканчиваем анимацию
		item2.innerHTML = item3.innerHTML // перетасовывам слайды
		item3.innerHTML = item4.innerHTML
		item1.innerHTML = itemBox
		item4.innerHTML = itemBox
		item0.innerHTML = item3.innerHTML
	}
	arrowLeft.addEventListener('click', moveLeft) // почему-то слетает прослушка стрелок
	arrowRight.addEventListener('click', moveRight)
})

//сдвиг стартового слайда на десктопе
const isMobile = () => document.documentElement.clientWidth > 390;

let lastIsMobile = isMobile(); // сдвигаем если размер более 390px
if (lastIsMobile === true) {
	moveRight();
} 

// переключение при ресайзе
const switchSize = () => {
  if (isMobile() === lastIsMobile) return;
  lastIsMobile = isMobile();
  if (lastIsMobile === true) {
    moveRight();
  } else {
    moveLeft();
  }
}

window.addEventListener('resize', switchSize);
