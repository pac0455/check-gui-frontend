document.getElementById('imageUpload').addEventListener('change', function (event) {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.innerHTML = '';

    Array.from(event.target.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'img-thumbnail m-2';
            img.style.maxWidth = '200px';
            imagePreview.appendChild(img);
        }
        reader.readAsDataURL(file);
    });

    // Simular la obtención de la revisión de la API
    setTimeout(getReview, 1000);
});

function getReview() {
    // Aquí es donde normalmente harías la llamada a la API REST
    // Por ahora, simularemos una respuesta
    const mockReview = "Esta es una revisión de ejemplo. Aquí irían los consejos para mejorar las fotos basados en la respuesta de la API.";

    document.getElementById('reviewSection').style.display = 'block';
    document.getElementById('reviewContent').textContent = mockReview;
}