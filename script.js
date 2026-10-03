// Smooth navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Navbar shadow while scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }
});