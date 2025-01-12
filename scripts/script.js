document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("#header");

    const updateActiveDot = () => {
        let current = "";

        [header, ...sections].forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
            if (dot.getAttribute("href").slice(1) === current) {
                dot.classList.add("active");
            }
        });
    };

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[0].classList.add("active");

    window.addEventListener("scroll", updateActiveDot);
});

const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');
const menuLinks = document.querySelectorAll('.dropdown-menu a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    if (menuIcon.classList.contains('active')) {
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'translateX(0)';
    } else {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateX(20px)';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateX(20px)';
    });
});

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  items[currentIndex].classList.remove('active');
  currentIndex = (index + items.length) % items.length;
  items[currentIndex].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
  showSlide(currentIndex + 1); 
});

document.getElementById('prev').addEventListener('click', () => {
  showSlide(currentIndex - 1); 
});

setInterval(() => {
    showSlide(currentIndex + 1); 
  }, 5000); 
  

