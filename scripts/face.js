function createBeardToggle() {
  const button = document.getElementById("toggleBeard");
  const beard = document.getElementById("beard");

  let isVisible = true;

  button.addEventListener("click", () => {
    isVisible = !isVisible;

    // Toggle visibility of beard
    beard.setAttribute("visible", isVisible);

    // Update button text
    button.textContent = isVisible
    ? "Disable beard"
    : "Enable beard";
  });
};

createBeardToggle();