const btn = document.querySelectorAll(".btn");
const close = document.querySelector(".close");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
  });
});

close.addEventListener("click", function () {
  const dialog = document.querySelector("dialog");
  dialog.close();
});
