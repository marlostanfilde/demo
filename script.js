const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        // Calcul de la position de la souris à l'intérieur de l'élément
        let rect = item.getBoundingClientRect();
        let x = e.clientX - rect.left; 
        let y = e.clientY - rect.top;

        // On fait pencher l'élément légèrement vers la souris
        let xRotation = -((y - rect.height / 2) / 10);
        let yRotation = (x - rect.width / 2) / 10;

        item.style.transform = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    // Reset quand la souris sort
    item.addEventListener('mouseleave', () => {
        item.style.transform = `perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)`;
    });
});
