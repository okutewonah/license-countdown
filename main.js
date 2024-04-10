const lightSwitch = document.getElementById("light-switch");

lightSwitch.addEventListener("change", () => {
  if (lightSwitch.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("dark-mode", true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("dark-mode", false);
  }
});
