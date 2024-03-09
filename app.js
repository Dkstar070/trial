let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];


left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})
let left_btn1 = document.getElementsByClassName('lef')[0];
let right_btn1 = document.getElementsByClassName('rig')[0];
let cards1 = document.getElementsByClassName('card1')[0];


left_btn1.addEventListener('click', () => {
    cards1.scrollLeft -= 140;
})
right_btn1.addEventListener('click', () => {
    cards1.scrollLeft += 140;
})
let left_btn2 = document.getElementsByClassName('lef1')[0];
let right_btn2 = document.getElementsByClassName('rig1')[0];
let cards2 = document.getElementsByClassName('card2')[0];


left_btn2.addEventListener('click', () => {
    cards2.scrollLeft -= 140;
})
right_btn2.addEventListener('click', () => {
    cards2.scrollLeft += 140;
})
