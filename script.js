let currentDate = new Date().toLocaleDateString();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth() + 1;
let date = document.querySelector("#date");
let year = document.querySelector("#year");

date.textContent = `${currentMonth}/${currentDay}/${currentYear}`;
year.textContent = currentYear;
