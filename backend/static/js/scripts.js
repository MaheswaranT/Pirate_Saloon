document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    const scrollLinks = document.querySelectorAll('.nav-link');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            // Close the navbar after clicking a link on mobile
            const navbar = document.querySelector('.navbar-collapse');
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
            }
        });
    });

    // Navbar Visibility on Scroll
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    };
});