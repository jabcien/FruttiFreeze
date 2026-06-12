/* Contacto JavaScript */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (validateForm()) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';

                setTimeout(() => {
                    alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado con éxito.');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    
                    // Remove validation classes
                    contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
                }, 1500);
            }
        });
    }

    function validateForm() {
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                showError(input);
                isValid = false;
            } else {
                if (input.type === 'email') {
                    if (!validateEmail(input.value)) {
                        showError(input);
                        isValid = false;
                    } else {
                        showSuccess(input);
                    }
                } else {
                    showSuccess(input);
                }
            }
        });

        return isValid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input) {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }

    function showSuccess(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
});
