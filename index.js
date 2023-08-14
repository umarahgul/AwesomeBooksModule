import Library from  "./modules/libraryClass.js";

document.addEventListener('DOMContentLoaded', () => {
    const booksCollection = new Library();
    booksCollection.initializeLocalStorage();
  
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