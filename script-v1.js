// Enhanced elegant interactions
document.querySelectorAll('.link-item:not(.coming-soon)').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the URL from the href attribute
        const url = this.getAttribute('href');
        
        // Create elegant ripple effect
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(243, 156, 18, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: scale(0);
            animation: elegantRipple 0.8s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        
        // Make sure the parent link has relative positioning for the ripple
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        // Navigate to the URL after a short delay for the ripple effect
        setTimeout(() => {
            window.open(url, '_blank');
            ripple.remove();
        }, 200);
        
        // Remove ripple after animation completes (backup)
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 800);
    });
});

// Add elegant ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes elegantRipple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Subtle mouse tracking for particles
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 8;
        const xPos = x * speed;
        const yPos = y * speed;
        
        particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});

// Enhanced coming soon interaction
document.querySelectorAll('.coming-soon').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create elegant notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, var(--brand-orange), var(--brand-orange-light));
            color: var(--brand-black);
            padding: 20px 28px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 1rem;
            z-index: 1000;
            animation: elegantPopup 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: var(--shadow-elegant);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        `;
        notification.innerHTML = '✨ Coming Soon<br><span style="font-size: 0.8rem; font-weight: 300;">Stay tuned for updates</span>';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'elegantPopup 0.4s cubic-bezier(0.4, 0, 0.2, 1) reverse';
            setTimeout(() => notification.remove(), 400);
        }, 2500);
    });
});

// Add elegant popup animation
const popupStyle = document.createElement('style');
popupStyle.textContent = `
    @keyframes elegantPopup {
        from {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
        }
        to {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(popupStyle);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';