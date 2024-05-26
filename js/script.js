let navbar = document.querySelector('.navbar')
let btnNavBar = document.querySelector('#btn')

btnNavBar.onclick = function() {
    navbar.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", function() {
    let navbarLinks = document.querySelectorAll('.navbar ul li a');
    let currentPath = window.location.pathname;

    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});