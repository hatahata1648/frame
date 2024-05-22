window.addEventListener('load', function() {
    const img = document.querySelector('img');
    img.style.opacity = 1; // Fade in the image

    setTimeout(function() {
        window.location.href = 'https://hatahata1648.github.io/seibose/'; // Redirect after total animation time
    }, 9000); // Total time before redirect: image fade-in (3s) + loading animation (6s)
});
