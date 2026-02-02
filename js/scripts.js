document.addEventListener("DOMContentLoaded", function() {

    const menuIcon = document.getElementById("menu-icon");
    const navbarMenu = document.getElementById("navbar-menu");

    if (menuIcon && navbarMenu) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            navbarMenu.classList.toggle('active');
        });
    }

});