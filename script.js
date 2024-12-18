const myLibrary = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, status: "Read" },
    { title: "1984", author: "George Orwell", pages: 328, status: "Not Read" }
];

// Show/Hide form logic
document.querySelector('.add').addEventListener('click', function() {
    document.querySelector('.bookForm').style.display = 'block';
});
document.querySelector('.closeButton').addEventListener('click', function() {
    document.querySelector('.bookForm').style.display = 'none';
});

// Book Constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

// Add book to library
function addBookToLibrary(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.querySelector('input[name="read"]:checked')?.value === "yes" ? "Read" : "Not Read";

    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);

    document.getElementById("bookForm").reset(); // Clear the form
    document.querySelector('.bookForm').style.display = 'none'; // Hide the form
    renderBook(); // Render updated library
}

// Remove book
function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBook(); // Re-render the book list
}
//changig book status
function changeStatus(index){
    myLibrary[index].status = myLibrary[index].status === "Read" ? "Not Read" : "Read";
    renderBook(); 
}
// Render books
function renderBook() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML = ""; // Clear previous content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book");

        // Determine button color based on status
        const statusColor = book.status === "Read" ? "green" : "red";

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <button 
                onClick="changeStatus(${index})" 
                style="background-color: ${statusColor}; color: white; border: none; padding: 10px; border-radius: 5px;">
                ${book.status}
            </button>
            <button 
                onclick="removeBook(${index})" 
                style="background-color: #ff4d4d; color: white; border: none; padding: 10px; border-radius: 5px;">
                Remove
            </button>
        `;

        libraryDiv.appendChild(bookCard);
    });
}

// Event listener for form submission
document.getElementById("bookForm").addEventListener("submit", addBookToLibrary);

// Initial render
renderBook();
