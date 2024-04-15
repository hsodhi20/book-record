// Define the Book constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.author = author;
}

// Add the toggleReadStatus method to the Book prototype
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read; // Toggle the read status
};

// Create instances of Book
const book1 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '671', true);
const book2 = new Book('Nausea', 'Jean-Paul Sartre', '187', true);
const book3 = new Book('Rasidi Ticket', 'Amrita Pritam', '207', true);
const book4 = new Book('Ariel', 'Sylvia Plath', '81', true);


// Array to hold the books
let MyLibrary = [book1, book2, book3, book4];

// Function to display the books
function displayBooks() {
    const content = document.querySelector('.content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    MyLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = book.title;
        card.appendChild(title);

        const authorInfo = document.createElement('p');
        authorInfo.classList.add('info');
        authorInfo.textContent = `Author: ${book.author}`;
        card.appendChild(authorInfo);

        const pagesInfo = document.createElement('p');
        pagesInfo.classList.add('info');
        pagesInfo.textContent = `Pages: ${book.pages}`;
        card.appendChild(pagesInfo);

        const readInfo = document.createElement('p');
        readInfo.classList.add('info');
        readInfo.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        card.appendChild(readInfo);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Change Read Status';
        toggleButton.classList.add('toggle-button');

        toggleButton.addEventListener('click', () => {
            // Toggle the read status of the book
            book.toggleReadStatus();
            // Update the displayed information
            readInfo.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        removeButton.addEventListener('click', () => {
            MyLibrary.splice(index, 1);
            displayBooks();
        });

        card.appendChild(removeButton);
        card.appendChild(toggleButton);
        content.appendChild(card);
    });
}

// Add event listener to the form
document.getElementById('bookForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the form fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    // Create a new Book object
    const newBook = new Book(title, author, pages, read);

    // Add the new book to the library
    MyLibrary.push(newBook);

    // Display the updated list of books
    displayBooks();

    // Reset the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
});

// Initial display of books
displayBooks();
