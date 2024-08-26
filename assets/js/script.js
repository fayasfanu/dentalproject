document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const rightMenu = document.querySelector('.right-menu');

    mobileMenuIcon.addEventListener('click', function() {
        rightMenu.classList.toggle('active');
    });
});