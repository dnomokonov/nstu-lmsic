let navbar = document.querySelector('.navbar')
let btnNavBar = document.querySelector('#btn')

btnNavBar.onclick = function() {
    navbar.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", function() {
    let navbarLinks = document.querySelectorAll('.navbar ul li a');
    let currentPath = window.location.pathname;

    console.log(currentPath)

    navbarLinks.forEach(link => {
        let linkPath = new URL(link.href, window.location.origin).pathname;

        console.log(linkPath)

        if ((currentPath === '/' && linkPath === '/index.html') || linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});