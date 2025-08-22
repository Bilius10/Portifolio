document.addEventListener('DOMContentLoaded', function() {

    // --- CONFIGURAÇÃO DO PARTICLES.JS ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#9E00FF" // Cor roxa vibrante
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": true
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#4F0080", // Roxo escuro para as linhas
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
             "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });


    // --- EFEITO MÁQUINA DE ESCREVER (TYPING) ---
    const typingElement = document.getElementById('typing-effect');
    const textToType = "Desenvolvedor Backend";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidade da digitação
        }
    }
    type();


    // --- ATIVAR LINK DO MENU CONFORME SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptionsNav = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // 50% da seção precisa estar visível
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptionsNav);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- ANIMAÇÃO DE ENTRADA (FADE-IN/SLIDE-UP) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptionsAnimate = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // 20% do elemento visível
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, observerOptionsAnimate);

    animatedElements.forEach(element => {
        animateObserver.observe(element);
    });
});