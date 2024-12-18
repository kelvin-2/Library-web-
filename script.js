const myLibrary = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, status: "Read" },
    { title: "1984", author: "George Orwell", pages: 328, status: "Not Read" }
  ];

document.getElementById("addButton").addEventListener("click", function() {
    const form = document.getElementById("bookForm");
    form.style.display = form.style.display === "none" ? "block" : "none"; // Toggle form visibility
  });

function Book(title,author,pages,status) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.querySelector('input[name="read"]:checked')?.value === "yes" ? "Read" : "Not Read";

    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);

    renderBooks();
}

function renderBook(){
    const libraryDiv=document.getElementById("library");
    libraryDiv.innerHTML=""; //clears the prev content
    myLibrary.forEach((book,index)=>{
        const bookCard=document.createElement("Div");
        bookCard.classList.add("book");

        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.status}</p>
        <button onclick="removeBook(${index})">Remove</button>
      `;
      libraryDiv.appendChild(bookDiv);
    });
 
}

renderBook();