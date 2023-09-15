let editElement = document.getElementById("edit");
let editHoverMenu = document.getElementById("editHoverMenu");
let addColorToEditElement = document.getElementById("editColor");

editElement.addEventListener("mouseenter", () => {
  editHoverMenu.classList.remove("hoverMenu");
  addColorToEditElement.classList.add("addcolor");
});

editElement.addEventListener("mouseleave", () => {
  editHoverMenu.classList.add("hoverMenu");
  addColorToEditElement.classList.remove("addcolor");
});
