const html = {
  day: document.querySelector('#day'),
  hour: document.querySelector("#hour"),
  min: document.querySelector('#min'),
  sec: document.querySelector("#sec"),
  playButton: document.querySelector("#play"),
  pauseButton: document.querySelector("#pause"),
  dayInput: document.querySelector("#dayInput"),
  hourInput: document.querySelector("#hourInput"),
  minInput: document.querySelector("#minInput"),
  secInput: document.querySelector("#secInput"),
  dateContainer: document.querySelector("#dateInputContainer")
}

let stop = false

const timeSettings = {
  days: Number.parseInt(html.dayInput.value),
  hours: Number.parseInt(html.hourInput.value),
  mins: Number.parseInt(html.minInput.value),
  secs: Number.parseInt(html.secInput.value),
};

function setSettingsValues() {
  const timeSettings = {
    days: Number.parseInt(html.dayInput.value),
    hours: Number.parseInt(html.hourInput.value),
    mins: Number.parseInt(html.minInput.value),
    secs: Number.parseInt(html.secInput.value),
  };

  html.day.textContent = timeSettings.days;
  html.hour.textContent = timeSettings.hours;
  html.min.textContent = timeSettings.mins;
  html.sec.textContent = timeSettings.secs;

  return timeSettings;
}

function toggleConfigInputsShow() {
  html.dateContainer.style.display === 'none' ? html.dateContainer.style.display = 'flex' : html.dateContainer.style.display = 'none'
}

const timeInSecs = {
  day: 86400,
  hour: 3600,
  min: 60,
};

let totalSecs =
  timeSettings.days * timeInSecs.day +
  timeSettings.hours * timeInSecs.hour +
  timeSettings.mins * timeInSecs.min +
  timeSettings.secs;

function refreshTimer() {
  stopTimer()

  const timeSettings = {
    days: Number.parseInt(html.dayInput.value),
    hours: Number.parseInt(html.hourInput.value),
    mins: Number.parseInt(html.minInput.value),
    secs: Number.parseInt(html.secInput.value),
  };

  html.day.textContent = timeSettings.days;
  html.hour.textContent = timeSettings.hours;
  html.min.textContent = timeSettings.mins;
  html.sec.textContent = timeSettings.secs;

  totalSecs = timeSettings.days * timeInSecs.day +
    timeSettings.hours * timeInSecs.hour +
    timeSettings.mins * timeInSecs.min +
    timeSettings.secs;

  return totalSecs
}

function timer() {
  const day = Math.floor(totalSecs / timeInSecs.day)
  const hour = Math.floor((totalSecs - (day * timeInSecs.day)) / timeInSecs.hour)
  const min = Math.floor((totalSecs - (day * timeInSecs.day) - (hour * timeInSecs.hour)) / timeInSecs.min)
  const sec = Math.floor((totalSecs - (day * timeInSecs.day) - (hour * timeInSecs.hour) - (min * timeInSecs.min)))

  showTimer(day, hour, min, sec)

  totalSecs--;
}

function showTimer(day, hour, min, sec) {
  html.day.textContent = day;
  html.hour.textContent = hour;
  html.min.textContent = min;
  html.sec.textContent = sec;
}

function verifyTotalSecs() {
  if (totalSecs === 0) {
    clearInterval(timerInterval)
    alert("TIME IS OVER")
  }
}

function startTimer() {
  html.dateContainer.style.display = 'none'

  html.playButton.style.display = 'none'
  html.pauseButton.style.display = 'inline'

  stop = false;

  const timerInterval = setInterval(() => {
    if (totalSecs >= 0)
      timer();
    else {
      clearInterval(timerInterval)
      alert("TIMER OVER")
      return;
    }

    if (stop) {
      clearInterval(timerInterval);
      return
    }
  }, 1000);
}

function stopTimer() {
  html.playButton.style.display = 'inline'
  html.pauseButton.style.display = 'none'

  stop = true
}

window.addEventListener("onload", setSettingsValues());
