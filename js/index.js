const d = document;

const $btnMenu = d.querySelector(".mobile_btn");
const $menu = d.querySelector(".nav_mobile");
const $openbtn = $btnMenu.firstElementChild;
const $closebtn = $btnMenu.lastElementChild;

$btnMenu.addEventListener('click', () => {
    $menu.classList.toggle('is_active')
    $openbtn.classList.toggle('close');
    $closebtn.classList.toggle('close')
})