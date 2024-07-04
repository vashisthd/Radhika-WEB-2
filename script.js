document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); 
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});