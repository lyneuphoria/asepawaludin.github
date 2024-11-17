// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        navLinks.classList.toggle('active');
    }
});

// Typing effect
function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.innerHTML = ''; // Membersihkan konten awal

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i); // Menambahkan satu karakter
            i++;
            setTimeout(type, speed); // Menunggu dan melanjutkan mengetik
        } else {
            setTimeout(() => {
                i = 0; // Reset indeks
                element.innerHTML = ''; // Hapus teks
                type(); // Mulai lagi mengetik
            }, 1000); // Tunggu 1 detik sebelum mulai mengetik lagi
        }
    }

    type(); // Mulai efek mengetik
}

// Initialize typing effect with "Asep Awaludin"
document.addEventListener('DOMContentLoaded', () => {
    const welcomeText = "Asep Awaludin"; // Ubah teks di sini
    const typingElement = document.querySelector('.typing-text');
    typeWriter(welcomeText, typingElement);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Navbar scroll effect (removing blur and adjusting background color)
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.querySelector('#home');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Berubah setelah scroll 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Panggil fungsi saat scroll dengan debounce
window.addEventListener('scroll', debounce(() => {
    handleNavbarScroll();
}, 100));

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    handleNavbarScroll();
});



// Debounce scroll event to optimize performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Call the navbar scroll function on scroll
window.addEventListener('scroll', debounce(() => {
    handleNavbarScroll(); // Update navbar background and shadow on scroll
}, 100));

// Skills animation (Intersection Observer)
const skillItems = document.querySelectorAll('.skill-item');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease-out';
    observer.observe(item);
});

// Section titles hover effect
const sectionTitles = document.querySelectorAll('.section-title');

sectionTitles.forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.transform = 'translateY(-5px)';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'translateY(0)';
    });
});
