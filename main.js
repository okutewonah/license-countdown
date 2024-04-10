const lightSwitch = document.getElementById("light-switch");
const days = document.getElementById("days");
const timeElements = document.querySelectorAll("h2");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const mainEvent = new Date("2024.06.20");

lightSwitch.addEventListener("change", () => {
  if (lightSwitch.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("dark-mode", true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("dark-mode", false);
  }
});

const countdown = () => {
  countTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = mainEvent - now;
    const remainderDays = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    days.innerText = `${remainderDays}`;
    timeElements[0].textContent = `${hours}`;
    timeElements[1].textContent = `${minutes}`;
    timeElements[2].textContent = `${seconds}`;
  }, second);
};

countdown();
