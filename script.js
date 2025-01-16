// script.js

// Hero button: redirect to "about.html" on click
const heroBtn = document.getElementById("hero-btn");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    window.location.href = "about.html";
  });
}

// Contact form submission
const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Display a success message
    formResponse.classList.remove("hidden");
    formResponse.textContent = "Thank you! Your message has been submitted.";
    // Reset the form
    contactForm.reset();
  });
}
