import { DateTime } from './luxon.min.js';

const displayCurrentDate = () => {
  const dateElement = document.querySelector('#date');

  const currentDate = DateTime.local();

  const formattedDate = currentDate.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  dateElement.innerHTML = formattedDate;
};

export default displayCurrentDate;