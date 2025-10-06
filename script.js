
    <script>
        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Image error handling for profile
        document.querySelector('.profile-image').addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x300/0d9488/FFFFFF?text=WM';
            this.alt = 'Wilfred Muriithi';
        });
        
        // Image error handling for project images
        document.querySelectorAll('.project-img img').forEach(img => {
            img.addEventListener('error', function() {
                this.parentElement.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);display:flex;align-items:center;justify-content:center;color:white;font-size:3rem;"><i class="fas fa-code"></i></div>';
            });
        });
    </script>