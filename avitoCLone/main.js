window.onload = function () {
  const overlay = document.querySelector("#overlay");
  // opening popup
  document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
  });
  // closing popup
  document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
  });
};
