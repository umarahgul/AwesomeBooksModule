import { Library } from "./modules/libraryClass.js";
import { setupNavigation } from "./modules/showhideSections.js";


function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function displayCurrentDate() {
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
}



document.addEventListener('DOMContentLoaded', () => {
    const booksCollection = new Library();
    booksCollection.initializeLocalStorage();

    setupNavigation();

    const addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        booksCollection.addData(titleInput.value, authorInput.value);
        titleInput.value = '';
        authorInput.value = '';
    });


    booksCollection.showBooks();


});

displayCurrentDate();
setInterval(displayCurrentDate, 1000);