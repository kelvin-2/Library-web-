const myLibrary = [];
document.getElementById("addButton").addEventListener("click", function() {
    const form = document.getElementById("bookForm");
    form.style.display = form.style.display === "none" ? "block" : "none"; // Toggle form visibility
  });
  function Book() {
    // Getting values from the form elements
    this.title = document.getElementById("title").value;
    this.author = document.getElementById("author").value;
    this.pages = document.getElementById("pages").value;
  
    // Status method to check if the book is read or not
    this.status = function() {
      const read = document.querySelector('input[name="read"]:checked')?.value === "yes"; // returns true or false
      return read ? "Read" : "Not Read";
    }
  }
function addBookToLibrary() {
    const newBook= new Book();
    myLibrary.push(newBook);
    document.getElementById("bookForm").style.display="none";
}