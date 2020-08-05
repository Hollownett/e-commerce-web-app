const sidebarButton = document.querySelector(".brand button");
const sidebar = document.querySelector(".sidebar");
const closeSidebarButton = document.querySelector(".close-sidebar-button");

const openMenu = () => {
  sidebar.classList.add("open");
};

const closeMenu = () => {
  sidebar.classList.remove("open");
};

sidebarButton.addEventListener("click", () => {
  openMenu();
});

closeSidebarButton.addEventListener("click", () => {
  closeMenu();
});
