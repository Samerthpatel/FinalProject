/* DEVELOPER: Samerth Patel, IS117-101, Spring 2021 */

const navbar = document.getElementById("navbar");
let bol = false;
const offset = 200;

window.addEventListener("scroll", () => {

    if (pageYOffset > offset && bol === false) {
        navbar.classList.add("bg-light");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.style.boxShadow = "0px 5px 15px rgba(0 ,0, 0.3)";
    } else if (pageYOffset < offset && bol === false) {
        navbar.classList.remove("bg-light");
        navbar.classList.remove("navbar-light");
        navbar.classList.add("navbar-dark");
        navbar.style.boxShadow = "none";
        bol = false;
    }
});