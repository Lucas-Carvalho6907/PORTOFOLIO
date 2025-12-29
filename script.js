// Ativa animação ao descer a página
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

// Movimento do fundo espacial com o mouse
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, #1a0033 0%, #050505 80%)`;
});