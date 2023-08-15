
import Library from './modules/libraryClass.js';
import  setupNavigation  from './modules/showhideSections.js';
import displayCurrentDate from './modules/displayDate.js';


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