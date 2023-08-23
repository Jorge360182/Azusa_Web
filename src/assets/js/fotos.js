const buttons = document.querySelectorAll("#fotos button");
const overlay = document.createElement("div");
const overlayImage = document.createElement("img");
overlay.classList.add("image-overlay");
overlay.appendChild(overlayImage);
document.body.appendChild(overlay);

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const image = this.querySelector("img");
    overlayImage.src = image.src;
    overlayImage.alt = image.alt;
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});