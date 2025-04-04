const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);

const booksByGrade = {
  "Grade 1": [
    {
      title: "Grade 1 English",
      image: "bookImage/Grade 1/Grade 1 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-english_fetena_net_890a.pdf",
    },
    {
      title: "Grade 1 Amharic",
      image: "bookImage/Grade 1/Grade 1 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-amharic_fetena_net_4103.pdf",
    },
    {
      title: "Grade 1 Environmental-Science",
      image: "bookImage/Grade 1/Grade 1 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/Environmental%20Science_fetena_net_32e0.pdf",
    },
    {
      title: "Grade 1 Maths",
      image: "bookImage/Grade 1/Grade 1 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collcd ection/grade%201-Mathematics_fetena_net_9815.pdf",
    },
    {
      title: "Grade 1 Yeiyta Tbebat",
      image: "bookImage/Grade 1/Grade 1 yekwena tbebat.jpg",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/የክወናና%20የዕይታ%20ጥበባት_fetena_net_704c.pdf",
    },
  ],
  "Grade 2": [
    {
      title: "Grade 2 Amharic",
      image: "bookImage/Grade 2/Grade 2 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-amharic_fetena_net_27f8.pdf",
    },
    {
      title: "Grade 2 English",
      image: "bookImage/Grade 2/Grade 2 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-english_fetena_net_584a.pdf",
    },
    {
      title: "Grade 2 Environmental-Science",
      image: "bookImage/Grade 2/Grade 2 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-environmental%20science_fetena_net_0bb2.pdf",
    },
    {
      title: "Grade 2 Maths",
      image: "bookImage/Grade 2/Grade 2 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-mathematics_fetena_net_0ffa.pdf",
    },
    {
      title: "Grade 2 Yeiyta Tbebat",
      image: "bookImage/Grade 2/Grade 2 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-የክወናና%20የዕይታ%20ጥበባት_fetena_net_ee41.pdf",
    },
  ],
  "Grade 3": [
    {
      title: "Grade 3 Amharic",
      image: "bookImage/Grade 3/Grade 3 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-amharic_fetena_net_4a14.pdf",
    },
    {
      title: "Grade 3 English",
      image: "bookImage/Grade 3/Grade 3 English.png",
      downloadLink: "books/grade 3-amharic_fetena_net_4a14.pdf",
    },
    {
      title: "Grade 3 Environmental-Science",
      image: "bookImage/Grade 3/Grade 3 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-environmental%20science_fetena_net_be67.pdf",
    },
    {
      title: "Grade 3 Maths",
      image: "bookImage/Grade 3/Grade 3 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-mathematics_fetena_net_584c.pdf",
    },
    {
      title: "Grade 3 Yeiyta Tbebat",
      image: "bookImage/Grade 3/Grade 3 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-የክወናና%20የዕይታ%20ጥበባት_fetena_net_12c6.pdf",
    },
  ],
};

// Create a flat list of all books
const allBooks = Object.values(booksByGrade).flat();

// Cache elements that are accessed multiple times
const gradeSelectionPage = document.getElementById("grade-selection-page");
const subjectBooksPage = document.getElementById("subject-books-page");
const bookList = document.getElementById("book-list");
const searchBox = document.getElementById("search-bar");
const searchButton = document.getElementById("search-button");

let currentBooks = []; // Store the currently displayed books

// Function to display grades
function displayGrades() {
  console.log("Displaying grades..."); // Debugging line
  const gradeList = document.getElementById("grade-list");

  if (!gradeList) {
    console.error("grade-list element not found!"); // Debugging line
    return;
  }

  // Clear previous grade cards
  gradeList.innerHTML = "";

  // Create and append grade cards
  grades.forEach((grade) => {
    const gradeCard = document.createElement("div");
    gradeCard.classList.add("grade-card");
    gradeCard.innerHTML = `
      <i class="fas fa-folder"></i>
      <h2>${grade}</h2>
    `;
    gradeCard.addEventListener("click", () => showBooksForGrade(grade));
    gradeList.appendChild(gradeCard);
  });
}

// Function to show books for a selected grade
function showBooksForGrade(grade) {
  console.log(`Showing books for ${grade}...`); // Debugging line
  bookList.innerHTML = "<p>Loading books...</p>"; // Show loading message
  currentBooks = booksByGrade[grade] || []; // Get books for the selected grade
  console.log("Current books after selection:", currentBooks); // Debugging line

  // Hide grade selection page and show subject books page
  gradeSelectionPage.style.display = "none";
  subjectBooksPage.style.display = "block";

  displayBooks(currentBooks); // Display all books for the grade
}

// Function to display books
function displayBooks(books) {
  console.log("Displaying books..."); // Debugging line
  console.log("Books to display:", books); // Debugging line

  bookList.innerHTML = ""; // Clear previous list

  if (books.length === 0) {
    console.log("No books found."); // Debugging line
    bookList.innerHTML = "<p>No books found.</p>"; // No books message
    return;
  }

  books.forEach((book) => {
    const bookCard = document.createElement("a");
    bookCard.classList.add("book-card");
    bookCard.href = book.downloadLink || "#";
    bookCard.setAttribute("download", true);

    bookCard.innerHTML = `
      <img src="${book.image || "default-image.png"}" alt="${book.title}">
      <div class="book-info">
        <h2>${book.title}</h2>
      </div>
    `;
    bookList.appendChild(bookCard);
  });
}
// Function to filter books based on search input
function filterBooks() {
  console.log("Filtering books..."); // Debugging line

  // Get the search term
  const searchTerm = searchBox.value.toLowerCase();
  /* console.log("Search term:", searchTerm); */ // Debugging line

  // Filter all books based on the search term
  const filteredBooks = allBooks.filter((book) => {
    const title = book.title.toLowerCase();
    /* console.log(
      `Book title: ${title}, Includes search term? ${title.includes(
        searchTerm
      )}` );*/
    // Debugging line
    return title.includes(searchTerm);
  });

  console.log("Filtered books:", filteredBooks); // Debugging line

  // Display the filtered books
  console.log("Displaying filtered books..."); // Debugging line
  displayBooks(filteredBooks);
  // Hide grade selection page and show subject books page
  gradeSelectionPage.style.display = "none";
  subjectBooksPage.style.display = "block";
}

// Search box event listener
/* searchBox.addEventListener("input", filterBooks);
 */
// Search button event listener
searchButton.addEventListener("click", () => {
  filterBooks(); //Trigger the filter function
});

// Back button functionality
document.getElementById("back-button").addEventListener("click", () => {
  gradeSelectionPage.style.display = "block";
  subjectBooksPage.style.display = "none";
});

// Navigation functions
function showHomePage() {
  gradeSelectionPage.style.display = "block";
  subjectBooksPage.style.display = "none";
  document.getElementById("about-us-page").style.display = "none";
}

function showAboutUsPage() {
  gradeSelectionPage.style.display = "none";
  subjectBooksPage.style.display = "none";
  document.getElementById("about-us-page").style.display = "block";
}

// Event listeners for navigation links
document.getElementById("home-link").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  showHomePage();
});

document.getElementById("about-link").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default link behavior
  showAboutUsPage();
});

// Call the function to display grades on page load
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed"); // Debugging line
  displayGrades();
});
