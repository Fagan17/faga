const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    items.forEach(item => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        item.style.display = item.classList.contains(filter)
          ? "block"
          : "none";
      }
    });

  });
});