window.addEventListener("resize", adjustContainerSize);

function adjustContainerSize() {
  const contenedor = document.querySelector(".contenedor");
  const contenedor2s = contenedor.querySelectorAll(".contenedor2");

  contenedor2s.forEach((contenedor2) => {
    contenedor2.style.width = "100%";
  });

  if (window.innerWidth >= 768) {
    contenedor2s.forEach((contenedor2) => {
      contenedor2.style.width = "calc(50% - 20px)";
    });
  }

  if (window.innerWidth >= 480 && window.innerWidth < 768) {
    contenedor2s.forEach((contenedor2) => {
      contenedor2.style.width = "calc(100% - 20px)";
    });
  }
}

// Ajustar el tamaño inicial al cargar la página
adjustContainerSize();