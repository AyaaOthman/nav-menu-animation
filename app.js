const controlBtns = document.querySelector('.controller')
const container = document.querySelector('.menu-container')
const items = document.querySelectorAll('li')
const list = document.querySelector('ul')
const lineOne = document.querySelector('.line-one')
const lineTwo = document.querySelector('.line-two')
controlBtns.addEventListener('click', () =>{
    container.classList.toggle('active')
    items.forEach(item => {
        item.classList.toggle('active')
})
    list.classList.toggle('active')
    lineOne.classList.toggle('active')
    lineTwo.classList.toggle('active')
    controlBtns.classList.toggle('active')


})