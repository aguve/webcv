document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navCollapse).hide();
        }
    });
});
