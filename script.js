document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        
        if (scrollPosition >= sectionTop - windowHeight / 2) {
            section.style.transform = `translateX(${index * 100}vw)`;
        } else {
            section.style.transform = `translateX(0)`;
        }
    });
});
