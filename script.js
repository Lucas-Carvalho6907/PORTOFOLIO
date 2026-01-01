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

// Lógica da Sidebar (Novo)
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

const closeMenu = () => {
    sidebar.classList.remove('active');
};

closeBtn.addEventListener('click', closeMenu);

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Movimento do fundo espacial com o mouse
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, #1a0033 0%, #050505 80%)`;
});