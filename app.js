 const shapes = document.querySelectorAll(".shape");

  shapes.forEach(shape => {
    shape.addEventListener("click", () => {
      shapes.forEach(s => {
        s.classList.remove("big");
        s.classList.add("small");
      });

      shape.classList.remove("small");
      shape.classList.add("big");
    });
  });