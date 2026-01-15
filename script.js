// Analytics tracking (optional)
document.addEventListener('DOMContentLoaded', function() {
    initializeLinks();
    trackClicks();
});

// Initialize all links with click handlers
function initializeLinks() {
    const additionalLinks = document.querySelectorAll('.additional-link');
    
    additionalLinks.forEach(link => {
        link.addEventListener('click', handleAdditionalLink);
    });

    // Track social media clicks
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.className.match(/\b(facebook|instagram|tiktok|telegram)\b/);
            if (platform) {
                console.log(`Clicked: ${platform[1]}`);
                // You can add analytics here
            }
        });
    });
}

// Handle additional link clicks
function handleAdditionalLink(e) {
    const linkType = this.dataset.link;
    
    switch(linkType) {
        case 'email':
            handleEmailClick(e);
            break;
        case 'contact':
            handleContactClick(e);
            break;
        default:
            break;
    }
}

// Email click handler
function handleEmailClick(e) {
    e.preventDefault();
    const email = prompt('Enter your email address:');
    if (email) {
        // Replace with your actual email
        window.location.href = `mailto:your.email@example.com?subject=Message from Your Portfolio`;
        showNotification('Email client opened!');
    }
}

// Contact form handler
function handleContactClick(e) {
    e.preventDefault();
    showContactForm();
}

// Show contact form modal
function showContactForm() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Get in Touch</h2>
            <form id="contactForm">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles if not already added
    if (!document.getElementById('modalStyles')) {
        const style = document.createElement('style');
        style.id = 'modalStyles';
        style.textContent = `
            .modal {
                display: flex;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .modal-content {
                background: white;
                padding: 30px;
                border-radius: 15px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                position: relative;
                animation: slideIn 0.3s ease;
            }

            @keyframes slideIn {
                from {
                    transform: translateY(-50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .close-btn {
                position: absolute;
                right: 20px;
                top: 15px;
                font-size: 28px;
                font-weight: bold;
                color: #999;
                cursor: pointer;
                transition: color 0.3s ease;
            }

            .close-btn:hover {
                color: #333;
            }

            .modal-content h2 {
                color: #333;
                margin-bottom: 20px;
                font-size: 24px;
            }

            #contactForm {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }

            #contactForm input,
            #contactForm textarea {
                padding: 12px;
                border: 2px solid #e0e0e0;
                border-radius: 8px;
                font-family: inherit;
                font-size: 14px;
                transition: border-color 0.3s ease;
            }

            #contactForm input:focus,
            #contactForm textarea:focus {
                outline: none;
                border-color: #667eea;
            }

            #contactForm button {
                padding: 12px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            #contactForm button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
            }

            #contactForm button:active {
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Close button handler
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        modal.remove();
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Form submission
    const form = modal.querySelector('#contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! I will get back to you soon.');
        form.reset();
        setTimeout(() => modal.remove(), 1500);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 16px 24px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        z-index: 1000;
        animation: slideInRight 0.4s ease;
    `;
    
    if (!document.getElementById('notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Track clicks (for analytics)
function trackClicks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.href;
            const platform = this.className;
            // You can send this data to a backend for analytics
            console.log(`Link clicked: ${href} - Platform: ${platform}`);
        });
    });
}

// Add smooth scroll behavior
document.addEventListener('scroll', function() {
    const container = document.querySelector('.container');
    if (container) {
        const scrollPosition = window.scrollY;
        container.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
});
