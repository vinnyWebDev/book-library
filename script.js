/*
  Missing functionality:
  A toggle read button on the card which actually works
    I mean realistically there has to be a boolean isRead vallue on the onject contructor right?
  A functioning delete button which deletes the book from the array

  When all the functionality is there, I would like to start the whole thing from scratch and build it back tideier.
  Styling would follow. 
*/

//library array
const library = [];
const bookGrid = document.querySelector("#bookGrid");
const newBookBtn = document.querySelector("#newBook");
const bookForm = document.querySelector(".book-form");

//book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//add book to library array
function addToLibrary(book) {
  library.push(book);
}

//form code
newBookBtn.addEventListener("click", () => {
  if (bookForm.style.display === "none") {
    bookForm.style.display = "block";
  } else {
    bookForm.style.display = "none";
  }
});

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const formBtn = document.querySelector(".form-btn");
const bookRead = document.querySelector("#bookRead");

formBtn.addEventListener("click", (e) => {
  const book = new Book(
    title.value,
    author.value,
    pages.value,
    bookRead.checked
  );

  console.log(book);
  addToLibrary(book);

  //I'm clearing the div each time so content doesn't double up
  bookGrid.textContent = "";

  for (i = 0; i < library.length; i++) {
    //We make a new card with each itteration
    const bookCard = document.createElement("div");
    const toggleRead = document.createElement("input");
    toggleRead.type = "checkbox";
    toggleRead.id = "toggleRead";

    const label = document.createElement("button");

    //rendering our book data as card content
    bookCard.textContent =
      "Title:" +
      library[i].title +
      " Author: " +
      library[i].author +
      " Pages: " +
      library[i].pages +
      "Read:" +
      library[i].isRead;

    label.addEventListener("click", () => {});
    //changes status of whether book is read changes card colour. It should be possible for the user to ammend this after book creation
    if (library[i].isRead == true) {
      bookCard.style.cssText =
        "background-color: green; border: 2px solid black; width: 150px; height: 100px; margin: 20px; padding: 20px";
    } else {
      bookCard.style.cssText =
        "background-color: pink; border: 2px solid black; width: 150px; height: 100px; margin: 20px; padding: 20px";
    }
    //appending our newly made book card to the book grid
    bookGrid.appendChild(bookCard);
    label.htmlFor = "toggleRead";
    label.appendChild(document.createTextNode("Toggle Read"));

    bookCard.appendChild(label);
    bookCard.appendChild(toggleRead);
  }
});
