// JavaScript for Portfolio

// Zoom-in effect for the home page title
document.addEventListener("DOMContentLoaded", () => {
    const homeTitle = document.querySelector(".home-title");
    if (homeTitle) {
        homeTitle.style.transition = "transform 0.8s ease-in-out";
        homeTitle.style.transform = "scale(1.2)";
        setTimeout(() => {
            homeTitle.style.transform = "scale(1)";
        }, 800);
    }
});

// Change menu bar background color on click
document.querySelector(".portfolio-menu").addEventListener("click", () => {
    document.querySelector(".portfolio-menu").style.backgroundColor = "darkviolet";
});

// Scroll animations for Education and Certification sections
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".education-section, .certification-section");
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 50) {
            section.classList.add("visible");
        }
    });
});

// Dynamic loading of certificates
const certificateGrid = document.getElementById("certificateGrid");
const showMoreButton = document.getElementById("showMoreButton");

// Sample certificate images
const certificates = [
    "certificates/certi1.jpg", "certificates/certi13.jpg", "certificates/certi8.jpg", "certificates/certi10.jpg",
    "certificates/certi5.jpg", "certificates/certi6.jpg", "certificates/certi7.jpg", "certificates/certi3.jpg",
    "certificates/certi9.jpg", "certificates/certi4.jpg", "certificates/certi11.jpg", "certificates/certi12.jpg",
    "certificates/certi2.jpg", "certificates/certi14.jpg", "certificates/certi15.jpg", "certificates/certi16.jpg",
    "certificates/certi17.jpg", "certificates/certi18.jpg", "certificates/certi19.jpg", "certificates/certi20.jpg",
];

let certificatesToShow = 7;

function loadCertificates() {
    certificateGrid.innerHTML = ""; // Clear existing content
    const displayedCertificates = certificates.slice(0, certificatesToShow);
    displayedCertificates.forEach((cert) => {
        const img = document.createElement("img");
        img.src = cert;
        img.alt = "Certificate";
        img.className = "certificate-image";
        certificateGrid.appendChild(img);
    });

    // Show or hide the "Show More" button
    showMoreButton.style.display = certificatesToShow < certificates.length ? "block" : "none";
}

showMoreButton.addEventListener("click", () => {
    certificatesToShow = certificates.length; // Show all certificates
    loadCertificates();
});

// Initial load
loadCertificates();

// Project Titles
const projectTitles = [
    "Developing an AI-based interactive chatbot or virtual assistant for the Department of Justice’s Website.",
    "Developing a User interface for the mobile app by using Figma",
    "Develop an UI for Food Delivery App using Figma",
    "Pitch point Application using Front End Technologies"
    "Clone of Facebook application",
    "Music player application using Python."
];

// Reference to the container
const projectContainer = document.getElementById("projectContainer");

// Speeding up the typewriter effect
function typeWriterEffect(element, text, callback) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50); // Increased typing speed
        } else if (callback) {
            callback(); // Move to the next title when done
        }
    }

    type();
}

// Function to create project rows and apply typewriter effect
function displayProjects(titles) {
    let currentIndex = 0;

    function createNextRow() {
        if (currentIndex < titles.length) {
            const row = document.createElement("div");
            row.classList.add("project-row");

            const titleElement = document.createElement("p");
            titleElement.classList.add("project-title");

            row.appendChild(titleElement);
            projectContainer.appendChild(row);

            // Apply typewriter effect and move to the next row after completion
            typeWriterEffect(titleElement, titles[currentIndex], createNextRow);
            currentIndex++;
        }
    }

    createNextRow(); // Start with the first title
}

// Start the process
displayProjects(projectTitles);

// Apply dynamic effects on click and scroll
document.querySelectorAll(".effect-element").forEach((element) => {
    element.addEventListener("click", () => {
        element.classList.add("click-effect");
        setTimeout(() => {
            element.classList.remove("click-effect");
        }, 1000);
    });
});

document.addEventListener("scroll", function () {
    document.querySelectorAll(".scroll-effect").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            element.classList.add("scroll-visible");
        }
    });
});

function showMore(id) {
    const textElement = document.getElementById(`text-${id}`);
    if (textElement.style.display === "block") {
        textElement.style.display = "none";
    } else {
        textElement.style.display = "block";
    }
}

// Add CSS transitions for smooth effects
const style = document.createElement("style");
style.textContent = `
    .visible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .scroll-visible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .click-effect {
        transform: scale(1.2);
        transition: transform 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);


  // JavaScript to handle form submission
  document.getElementById('send-message-btn').addEventListener('click', () => {
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;

    if (name && email && message) {
        // Construct WhatsApp URL
        const whatsappUrl = `https://wa.me/919360504959?text=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        )}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Please fill out all fields.');
    }
});
