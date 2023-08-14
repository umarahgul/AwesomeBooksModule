const date = document.querySelector('#date');

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const hours = currentDate.getHours();
  const minutes = formatTime(currentDate.getMinutes());
  const seconds = formatTime(currentDate.getSeconds());
  const formatHours = formatTime(((hours + 11) % 12) + 1);
  const format = hours < 12 || hours === 24 ? 'AM' : 'PM';
  date.innerHTML = `${currentDate.toLocaleDateString(
    'en',
    options,
  )} ${formatHours}:${minutes}:${seconds} <small>${format}</small>`;
}

getCurrentDate();
setInterval(getCurrentDate, 1000);