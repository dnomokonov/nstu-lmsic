let navbar = document.querySelector('.navbar')
let btnNavBar = document.querySelector('#btn')

btnNavBar.onclick = function() {
    navbar.classList.toggle('active')
}

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar ul li a')
    let currentPath = window.location.pathname

    if (currentPath.split('.').at(-1) === "/") {
        currentPath = "/index.html"
    } else {
        currentPath = currentPath.replace(/\/$/, '')
    }

    navbarLinks.forEach(link => {
        let linkPath = new URL(link.href, window.location.origin).pathname

        if (linkPath === "/") {
            linkPath = "/index.html"
        } else {
            linkPath = linkPath.replace(/\/$/, '')
        }

        if (currentPath === linkPath) {
            link.classList.add('active')
        }
    })
})