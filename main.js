const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(event) {
    smoothScroll(event); // Call the "smoothScroll" function
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
    top: targetId==="#" ? 0 : document.querySelector(targetId).offsetTop,
    behavior: "smooth"
    });
    console.log(targetId);
}

