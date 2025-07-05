const show = document.getElementById('nav-show-bars');
const hide = document.getElementById('nav-hide-cross');
const nav = document.getElementById('nav');

let isValid = true;

//nav initial value, false
hide.style.display = 'none'

//show nav bar function
function showNav() {
    show.addEventListener('click', () => {
        nav.style.display = 'block';
        show.style.display = 'none'
        hide.style.display = 'block'
    })
}

//function close the nav
function hideNav() {
    hide.addEventListener('click', () => {
        show.style.display = 'block';
        hide.style.display = 'none'
        nav.style.display = 'none';
    })
}
//calling the functions
showNav()
hideNav()