/**
 * hrsdesign - Professional Website Logic v2.1
 * Handles animations, sidebar navigation, and order processing
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL REVEAL ANIMATION
    // This makes elements "fade in" as you scroll down the page
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Modified to match the 'show' or 'visible' class in your CSS
                entry.target.classList.add('show');
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => scrollObserver.observe(el));


    // 2. SIDEBAR TOGGLE LOGIC (NEW)
    // Controls the slide-out menu and rotating button interaction
    window.toggleSidebar = () => {
        const sidebar = document.getElementById("default-sidebar");
        if (sidebar) {
            sidebar.classList.toggle("open");
        }
    };

    // Close sidebar automatically when a link is clicked
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sidebar = document.getElementById("default-sidebar");
            if (sidebar) sidebar.classList.remove("open");
        });
    });


    // 3. PRODUCT IMAGE MODAL
    window.openImage = (src) => {
        const modal = document.getElementById("imgModal");
        const modalImg = document.getElementById("modalImg");
        if (modal && modalImg) {
            modalImg.src = src;
            modal.style.display = "block";
        }
    };


    // 4. SMART ORDER LOGIC
    // Added 'buyNow' support to match your recent HTML updates
    window.buyNow = (name, price) => {
        window.setProductWithPrice(name, price);
    };

    window.setProductWithPrice = (name, price) => {
        const productSelect = document.getElementById("orderProduct") || document.getElementById("prodInput");
        const priceInput = document.getElementById("orderPrice");
        const totalInput = document.getElementById("orderTotal");

        if (productSelect) productSelect.value = name + " - ₹" + price;
        if (priceInput) priceInput.value = "Price: ₹" + price;
        if (totalInput) totalInput.value = "Total Amount: ₹" + price;

        // Smooth scroll to the order section
        const orderSection = document.getElementById("order") || document.getElementById("contact-faq");
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    // 5. FORM SUCCESS FEEDBACK
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', () => {
            const msg = document.getElementById("successMessage");
            if (msg) {
                msg.style.display = "block";
                setTimeout(() => { msg.style.display = "none"; }, 5000);
            }
        });
    });

});

// 6. LOGO CONSOLE BRANDING
console.log("%chrsdesign", "color: white; background: black; padding: 5px 10px; font-weight: bold; border-radius: 3px;");
console.log("Status: One-Man Army Operational");
console.log("Navigation: Rotating Hub Active");
