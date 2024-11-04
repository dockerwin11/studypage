const navBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-list");

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

});
