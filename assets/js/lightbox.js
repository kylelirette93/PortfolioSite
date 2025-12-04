document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-wrapper img');
    const overlay = document.getElementById('lightbox-overlay');
    const body = document.body;
    let currentZoomedImage = null;

    // Function to open the lightbox
    const openLightbox = (image) => {
        // Prevent scroll on the body
        body.classList.add('lightbox-active');
        
        // Apply the zoomed class to the clicked image
        image.classList.add('zoomed');
        currentZoomedImage = image;
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        if (currentZoomedImage) {
            currentZoomedImage.classList.remove('zoomed');
            currentZoomedImage = null;
        }
        body.classList.remove('lightbox-active');
    };

    // Attach click listener to each image
    images.forEach(image => {
        image.addEventListener('click', () => {
            if (!image.classList.contains('zoomed')) {
                openLightbox(image);
            } else {
                closeLightbox();
            }
        });
    });

    // Close lightbox when clicking the overlay or the zoomed image
    overlay.addEventListener('click', closeLightbox);

    // Close lightbox on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && body.classList.contains('lightbox-active')) {
            closeLightbox();
        }
    });
});