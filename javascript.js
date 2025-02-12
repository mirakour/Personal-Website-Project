document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
           
                });
            }
        });
    });

    // JavaScript: A "Hello world" tier Javascript routine, loaded via an external file
        console.log("Hello World")   
        
    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "🌙 Toggle Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Scroll Animation - Fade In & Slide Up
    const elementsToAnimate = document.querySelectorAll(".fade-in, .slide-up");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    elementsToAnimate.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
    const resumeBtn = document.getElementById("resume-btn");
    const resumeBtnFloating = document.getElementById("resume-btn-floating");
    const modal = document.getElementById("resume-modal");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close-btn");

    // Function to Open Modal
    function openModal() {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    // Function to Close Modal
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Open modal on button clicks
    if (resumeBtn) resumeBtn.addEventListener("click", openModal);
    if (resumeBtnFloating) resumeBtnFloating.addEventListener("click", openModal);

    // Close modal when clicking close button
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    // Close modal when clicking outside modal content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Prevent clicks inside modal content from closing it
    modalContent.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Close modal when pressing Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});
