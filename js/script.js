// ==============================
// UPL Solution JavaScript
// ==============================

// Navbar Scroll Effect

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


// Fade In Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".card, .why-container div, .left, .right");

hiddenElements.forEach((el) => observer.observe(el));



// Counter Animation (Optional)

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    }

    updateCounter();

});


// Product Card Hover

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// Scroll To Top Button

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.className = "scrollTop";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});