/* Productos JavaScript - Simplificado para 4 Helados */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchProduct');
    const productCards = document.querySelectorAll('.product-item');

    // Funcionalidad de Búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            productCards.forEach(card => {
                const title = card.querySelector('.product-title').textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? 'block' : 'none';
                if (title.includes(searchTerm)) card.classList.add('fade-in');
            });
        });
    }

    // Carga de Detalles en Modal
    const detailModal = document.getElementById('productDetailModal');
    if (detailModal) {
        detailModal.addEventListener('show.bs.modal', (event) => {
            const button = event.relatedTarget;
            const card = button.closest('.product-card');
            
            detailModal.querySelector('.detail-title').textContent = card.querySelector('.product-title').textContent;
            detailModal.querySelector('.detail-price').textContent = card.querySelector('.product-price').textContent;
            detailModal.querySelector('.modal-body img').src = card.querySelector('img').src;
        });
    }
});
