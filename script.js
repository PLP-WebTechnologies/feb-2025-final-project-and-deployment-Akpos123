js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded!");
});

// Enhance the gallery by allowing users to view images in full-screen.

js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        img.addEventListener("click", function() {
            const fullImage = document.createElement("div");
            fullImage.classList.add("lightbox");
            fullImage.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            document.body.appendChild(fullImage);

            fullImage.addEventListener("click", () => {
                fullImage.remove();
            });
        });
    });
});
