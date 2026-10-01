const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


const navLinks = document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});