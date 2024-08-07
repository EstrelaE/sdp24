const readMoreMaku = document.querySelector(".maku");
readMoreMaku.addEventListener("click", showMoreMaku);
const readMoreChaco = document.querySelector(".chaco");
readMoreChaco.addEventListener("click", showMoreChaco);
const readMoreDennis = document.querySelector(".dennis");
readMoreDennis.addEventListener("click", showMoreDennis);

function showMoreMaku() {
  const aboutMaku = document.querySelector("#aboutMaku");
  const aboutChaco = document.querySelector("#aboutChaco");
  const aboutMakuChaco = document.querySelector("#aboutMakuChaco");
  if (aboutMaku.classList.contains("hide")) {
    aboutMakuChaco.classList.add("hide");
    aboutChaco.classList.add("hide");
    readMoreChaco.innerText = "Ver mais sobre Chaco";
    aboutMaku.classList.remove("hide");
    readMoreMaku.innerHTML = "Voltar";
  } else {
    aboutMakuChaco.classList.remove("hide");
    aboutMaku.classList.add("hide");
    readMoreMaku.innerHTML = "Ver mais sobre Maku";
  }
}
function showMoreChaco() {
  const aboutChaco = document.querySelector("#aboutChaco");
  const aboutMaku = document.querySelector("#aboutMaku");
  const aboutMakuChaco = document.querySelector("#aboutMakuChaco");
  if (aboutChaco.classList.contains("hide")) {
    aboutMakuChaco.classList.add("hide");
    aboutMaku.classList.add("hide");
    readMoreMaku.innerText = "Ver mais sobre Maku";
    aboutChaco.classList.remove("hide");
    readMoreChaco.innerText = "Voltar";
  } else {
    aboutMakuChaco.classList.remove("hide");
    aboutChaco.classList.add("hide");
    readMoreChaco.innerHTML = "Ver mais sobre Chaco";
  }
}
function showMoreDennis() {
  const aboutDennis = document.querySelector("#aboutDennis");
  if (aboutDennis.classList.contains("hide")) {
    aboutDennis.classList.remove("hide");
    readMoreDennis.innerHTML = "Ver menos";
  } else {
    aboutDennis.classList.add("hide");
    readMoreDennis.innerHTML = "Ver mais sobre Dennis";
  }
}

document.querySelector("#showForm").addEventListener("click", showForm);

function showForm() {
  document.querySelector("#form").classList = "";
  document.querySelector("#showForm").classList = "hide";
}
document.querySelector("#showSchedule").addEventListener("click", showSchedule);

function showSchedule() {
  const schedule = document.querySelector("#schedule");
  if (schedule.classList.contains("hide")) {
    schedule.classList.remove("hide");
  } else {
    schedule.classList.add("hide");
  }
}
document
  .querySelector("#showConditionsSchedule")
  .addEventListener("click", showScheduleSecond);

function showScheduleSecond() {
  const schedule = document.querySelector("#conditions-schedule");
  if (schedule.classList.contains("hide")) {
    schedule.classList.remove("hide");
  } else {
    schedule.classList.add("hide");
  }
}

function checkCheckBox() {
  const checkBox = document.getElementById("human");
  const text = document.getElementById("clickForm");
  if (checkBox.checked === true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
