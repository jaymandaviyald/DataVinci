const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
        const menu = document.querySelector(".navbar-links");
        menu.classList.toggle("active");
        hamburger.classList.toggle("change");
    });