

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

const arrowLeft = document.querySelector('.arrow-left'); // ?????????????? ??????????
const arrowRight = document.querySelector('.arrow-right'); // ?????????????? ????????????
const slider = document.querySelector('.slider'); // ???????????????? ????????????????
const item0 = document.querySelector('#item-0'); //????????????
const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');
const item4 = document.querySelector('#item-4');
const sliderItem = document.querySelectorAll('.slider-item'); // ???????????? - ??????????????????

const moveLeft = () => { // ?????????????? ???????????????? ??????????
	slider.classList.add('transition-left'); // ???????????????????? ????????????????
	arrowLeft.removeEventListener('click', moveLeft); // ?????????????????? ?????????????????? ???? ?????????? ????????????????
	arrowRight.removeEventListener('click', moveRight); // ?????????????????? ?????????????????? ???? ?????????? ????????????????
	itemLeft(); // ???????????? ?????????????? ???????????????? ??????????
}

const moveRight = () => { // ?????????????? ???????????????? ????????????
	slider.classList.add('transition-right'); // ???????????????????? ????????????????
	arrowRight.removeEventListener('click', moveRight); // ?????????????????? ?????????????????? ???? ?????????? ????????????????
	arrowLeft.removeEventListener('click', moveLeft); // ?????????????????? ?????????????????? ???? ?????????? ????????????????
	itemRight(); // ???????????? ?????????????? ???????????????? ????????????
}

function itemLeft() { //???????????? ???????? ?????????????? ?????? ???????????? ??????????
	for (let i = 0; i < sliderItem.length; i++) { // ???????? ???????????? ???? ???????????????????? ??????????????
		// ???????????????? ?????????????? ???????????????? ?? ?? ?????????????????????? ???? ?????????????????? ???????????????????? ???????????????? ???? ?????????????????? ????????????
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

function itemRight() { //???????????? ???????? ?????????????? ?????? ???????????? ????????????
	for (let i = 0; i < sliderItem.length; i++) { // ???????? ???????????? ???? ???????????????????? ??????????????
		// ???????????????? ?????????????? ???????????????? ?? ?? ?????????????????????? ???? ?????????????????? ???????????????????? ???????????????? ???? ???????????????????? ????????????
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

// ???????????????????? ?????????????????? ?? ?????????????????? ??????????????:
arrowLeft.addEventListener('click', moveLeft); // ???? ?????????????? ?? ??????????????????
arrowRight.addEventListener('click', moveRight);
item1.addEventListener('click', moveLeft); // ???? ???????????? ?? ????????????????
item3.addEventListener('click', moveRight);
// ???????????? ????????????????, ???????????????????????? ???????????????? ?????????? ????????????
slider.addEventListener('animationend', (animation) => { // ?????????????? ???????? ?????? ??????????
	let itemBox = item2.innerHTML // ???????????????? ??????????????
	if (animation.animationName === 'move-left') { // ???????? ???????? ???????????????? ??????????
		slider.classList.remove('transition-left') // ?????????????????????? ????????????????
		item2.innerHTML = item1.innerHTML // ?????????????????????????? ????????????
		item1.innerHTML = item0.innerHTML
		item3.innerHTML = itemBox
		item0.innerHTML = itemBox
		item4.innerHTML = item1.innerHTML
	} else { // ?????????? ???????? ???????????????? ????????????
		slider.classList.remove('transition-right') // ?????????????????????? ????????????????
		item2.innerHTML = item3.innerHTML // ?????????????????????????? ????????????
		item3.innerHTML = item4.innerHTML
		item1.innerHTML = itemBox
		item4.innerHTML = itemBox
		item0.innerHTML = item3.innerHTML
	}
	arrowLeft.addEventListener('click', moveLeft) // ????????????-???? ?????????????? ?????????????????? ??????????????
	arrowRight.addEventListener('click', moveRight)
})

//?????????? ???????????????????? ???????????? ???? ????????????????
const isMobile = () => document.documentElement.clientWidth > 390;

let lastIsMobile = isMobile(); // ???????????????? ???????? ???????????? ?????????? 390px
if (lastIsMobile === true) {
	moveRight();
} 

// ???????????????????????? ?????? ??????????????
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
