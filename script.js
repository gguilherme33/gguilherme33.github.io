document.addEventListener('DOMContentLoaded', () => {
    const carrosselImages = document.querySelector('.carrossel-images');
    const images = carrosselImages.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function showImage(index) {
        carrosselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    showImage(currentIndex); // Mostra a primeira imagem inicialmente
});
