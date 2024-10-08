/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const mainNav = document.body.querySelector('#mainNav');
//     if (mainNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });

const urlDirectus = 'https://7sv72a2j.directus.app'

function getMetriscts() {
    const data = {
        service: 'site',
        key: 'access-site',
        value: 1
    }
    axios.post(`${urlDirectus}/items/metrics`, data)
        .then(() => console.log("Save metrics"))
        .catch(() => console.error('Erro save metrics'))
}

getMetriscts()

function sendData() {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        cell: document.getElementById('cell').value,
        description: document.getElementById('description').value
    }

    axios.post(`${urlDirectus}/items/contacts`, data)
        .then(() => console.log("Send contact"))
        .catch(() => console.error('Erro send contact'))
}

document.getElementById('text-ebb').innerText = 'Em Março de 2023, iniciei minha trajetoria como desenvolvedor Backend na empresa Enviabybus. Onde estou até a data atual ' + `${new Date().getDate().toString().padStart(2, '0')}/${new Date().getMonth().toString().padStart(2, '0')}/${new Date().getFullYear()}`