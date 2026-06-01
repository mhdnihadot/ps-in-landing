document.addEventListener('DOMContentLoaded', () => {
    const redirectBtn = document.getElementById('redirect-btn');
    
    // Smooth transition effect when clicking the button
    redirectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add a slight exit animation
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.4s ease';
        
        // Redirect after animation completes
        setTimeout(() => {
            window.location.href = 'https://propertyseller.com';
        }, 400);
    });
});
