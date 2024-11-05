const navBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("mobile-nav-list");

console.log(navLinks);
navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

});
