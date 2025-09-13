// Discovery Alert - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Button click handlers
    function setupButtonHandlers() {
        const trialButtons = document.querySelectorAll('.btn');
        
        trialButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const buttonText = this.textContent.trim();
                
                // Handle different button actions
                if (buttonText.includes('Free Trial')) {
                    handleFreeTrial();
                } else if (buttonText.includes('Demo') || buttonText.includes('Watch')) {
                    handleWatchDemo();
                } else if (buttonText.includes('Monthly Plan')) {
                    handleMonthlyPlan();
                } else if (buttonText.includes('Annual Plan')) {
                    handleAnnualPlan();
                } else if (buttonText.includes('AI Trade Alerts Demo')) {
                    handleTradeAlertsDemo();
                }
            });
        });
    }
    
    // Handle free trial signup
    function handleFreeTrial() {
        // In a real implementation, this would redirect to a signup page
        console.log('Free trial signup clicked');
        
        // Show a simple alert for demonstration
        showNotification('Starting your 14-day free trial signup...', 'success');
        
        // Simulate redirect delay
        setTimeout(() => {
            // window.location.href = '/signup?plan=trial';
            console.log('Would redirect to signup page');
        }, 1500);
    }
    
    // Handle demo video
    function handleWatchDemo() {
        console.log('Watch demo clicked');
        showNotification('Opening demo video...', 'info');
        
        // In a real implementation, this might open a modal or redirect
        setTimeout(() => {
            // Open demo video or modal
            console.log('Would open demo video');
        }, 1000);
    }
    
    // Handle monthly plan selection
    function handleMonthlyPlan() {
        console.log('Monthly plan selected');
        showNotification('Redirecting to monthly plan checkout...', 'success');
        
        setTimeout(() => {
            // window.location.href = '/checkout?plan=monthly';
            console.log('Would redirect to monthly checkout');
        }, 1500);
    }
    
    // Handle annual plan selection
    function handleAnnualPlan() {
        console.log('Annual plan selected');
        showNotification('Redirecting to annual plan checkout (Save $200!)...', 'success');
        
        setTimeout(() => {
            // window.location.href = '/checkout?plan=annual';
            console.log('Would redirect to annual checkout');
        }, 1500);
    }
    
    // Handle trade alerts demo
    function handleTradeAlertsDemo() {
        console.log('Trade alerts demo clicked');
        showNotification('Opening AI Trade Alerts demonstration...', 'info');
        
        setTimeout(() => {
            console.log('Would open trade alerts demo');
        }, 1000);
    }
    
    // Show notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            min-width: 300px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
            font-family: var(--font-family);
        `;
        
        // Set colors based on type
        if (type === 'success') {
            notification.style.backgroundColor = 'hsl(142, 76%, 36%)';
            notification.style.color = 'white';
        } else if (type === 'info') {
            notification.style.backgroundColor = 'hsl(217, 91%, 60%)';
            notification.style.color = 'white';
        } else if (type === 'warning') {
            notification.style.backgroundColor = 'hsl(38, 92%, 50%)';
            notification.style.color = 'white';
        }
        
        // Style the content
        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
        `;
        
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: inherit;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: 1rem;
            opacity: 0.7;
        `;
        
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Intersection Observer for animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.problem-card, .performance-card, .pricing-card, .features-card'
        );
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Enhanced button hover effects
    function setupButtonHoverEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Play button functionality for video placeholder
    function setupVideoPlayer() {
        const playButton = document.querySelector('.play-button');
        
        if (playButton) {
            playButton.addEventListener('click', function() {
                showNotification('Opening AI Trade Alerts explainer video...', 'info');
                
                // In a real implementation, this would open a video modal
                console.log('Would open video player');
            });
        }
    }
    
    // Performance cards interaction
    function setupPerformanceCards() {
        const performanceCards = document.querySelectorAll('.performance-card');
        
        performanceCards.forEach(card => {
            card.addEventListener('click', function() {
                const ticker = this.querySelector('.stock-ticker').textContent;
                showNotification(`Viewing detailed performance data for ${ticker}...`, 'info');
                
                // In a real implementation, this might show detailed performance data
                console.log(`Would show details for ${ticker}`);
            });
            
            // Add hover effect
            card.style.cursor = 'pointer';
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow-premium)';
            });
        });
    }
    
    // Form validation (if forms are added later)
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation would go here
                const formData = new FormData(this);
                console.log('Form submitted:', Object.fromEntries(formData));
                
                showNotification('Form submitted successfully!', 'success');
            });
        });
    }
    
    // Initialize all functionality
    function init() {
        smoothScroll();
        setupButtonHandlers();
        setupScrollAnimations();
        setupButtonHoverEffects();
        setupVideoPlayer();
        setupPerformanceCards();
        setupFormValidation();
        
        console.log('Discovery Alert website initialized');
    }
    
    // Run initialization
    init();
    
    // Add loading completion
    window.addEventListener('load', function() {
        console.log('All resources loaded');
        
        // Add a subtle entrance animation to the hero
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }
    });
    
});

// Additional utility functions
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

function formatPercentage(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(value / 100);
}

// Export functions for potential external use
window.DiscoveryAlert = {
    showNotification: function(message, type) {
        // This allows external scripts to show notifications
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        document.dispatchEvent(event);
    }
};