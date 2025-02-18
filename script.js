// Sample data for grades and books
const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);

const booksByGrade = {
  "Grade 1": [
    {
      title: "Grade 1 English",
      image: "bookImage/Grade 1 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-english_fetena_net_890a.pdf",
    },
    {
      title: "Grade 1 Amharic",
      image: "bookImage/Grade 1 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_32/collection/grade%201-amharic_fetena_net_4103.pdf",
    },
  ],
  "Grade 2": [
    {
      title: "Grade 2 Amharic",
      image: "bookImage/Grade 2 Amharic.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-amharic_fetena_net_27f8.pdf",
    },
    {
      title: "Grade 2 English",
      image: "bookImage/Grade 2 English.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-english_fetena_net_584a.pdf",
    },
    {
      title: "Grade 2 Environmental-Science",
      image: "bookImage/Grade 2 Environmental-Science.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-environmental%20science_fetena_net_0bb2.pdf",
    },
    {
      title: "Grade 2 Maths",
      image: "bookImage/Grade 2 Maths.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-mathematics_fetena_net_0ffa.pdf",
    },
    {
      title: "Grade 2 Yeiyta Tbebat",
      image: "bookImage/Grade 2 Yeiyta Tbebat.png",
      downloadLink:
        "https://fetena.net/books_asset/books_33/collection/grade%202-የክወናና%20የዕይታ%20ጥበባት_fetena_net_ee41.pdf",
    },
  ],
  "Grade 3": [
    {
      title: "Grade 3 Amharic",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-amharic_fetena_net_4a14.pdf",
    },
    {
      title: "Grade 3 English",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-english_fetena_net_eb40.pdf",
    },
    {
      title: "Grade 3 Environmental-Science",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-environmental%20science_fetena_net_be67.pdf",
    },
    {
      title: "Grade 3 Maths",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-mathematics_fetena_net_584c.pdf",
    },
    {
      title: "Grade 3 Yeiyta Tbebat",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_34/collection/grade%203-የክወናና%20የዕይታ%20ጥበባት_fetena_net_12c6.pdf",
    },
  ],
  "Grade 4": [
    {
      title: "Grade 4 Amharic",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-amharic_fetena_net_c3f0.pdf",
    },
    {
      title: "Grade 4 English",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-english_fetena_net_2d36.pdf",
    },
    {
      title: "Grade 4 Environmental-Science",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-Environmental%20Science_fetena_net_42ad.pdf",
    },
    {
      title: "Grade 4 Maths",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-mathematics_fetena_net_b8e6.pdf",
    },
    {
      title: "Grade 4 Yeiyta Tbebat",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-የክወናና%20የዕይታ%20ጥበባት_fetena_net_f675.pdf",
    },
  ],
  "Grade 5": [
    {
      title: "Grade 5 Amharic",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-amharic_fetena_net_131d.pdf",
    },
    {
      title: "Grade 5 English",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-english_fetena_net_eef5.pdf",
    },
    {
      title: "Grade 5 Environmental-Science",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-environmental%20science_fetena_net_15b0.pdf",
    },
    {
      title: "Grade 5 Maths",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-mathematics_fetena_net_c87f.pdf",
    },
    {
      title: "Grade 5 Yeiyta Tbebat",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_36/collection/grade%205-የክወናና%20የዕይታ%20ጥበባት_fetena_net_00cd.pdf",
    },
  ],
  "Grade 6": [
    {
      title: "Grade 6 Amharic",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-amharic_fetena_net_a9f0.pdf",
    },
    {
      title: "Grade 6 English",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-english_fetena_net_d4b3.pdf",
    },
    {
      title: "Grade 6 Environmental-Science",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-environmental%20science_fetena_net_c906.pdf",
    },
    {
      title: "Grade 6 Maths",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-mathematics_fetena_net_9cbd.pdf",
    },
    {
      title: "Grade 6 Yeiyta Tbebat",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_31/collection/grade%206-የክወናና%20የዕይታ%20ጥበባት_fetena_net_dd85.pdf",
    },
  ],
  "Grade 7": [
    {
      title: "Grade 7 Amharic",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-amharic_fetena_net_ff5d.pdf",
    },
    {
      title: "Grade 7 English",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-english_fetena_net_0daa.pdf",
    },
    {
      title: "Grade 7 Biology",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/biology_fetena_net_59.pdf",
    },
    {
      title: "Grade 7 Maths",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-mathematics_fetena_net_7350.pdf",
    },
    {
      title: "Grade 7 Performing-Visual-Arts",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-performing%20and%20visual%20arts%20pva_fetena_net_d7c0.pdf",
    },
    {
      title: "Grade 7 Career & Technical Education",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-career%20and%20technical%20education%20cte_fetena_net_6b46.pdf",
    },
    {
      title: "Grade 7 Chemistry",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/chemistry_fetena_net_c9.pdf",
    },
    {
      title: "Grade 7 Citizenship-Education",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-citizenship%20education_fetena_net_07b7.pdf",
    },
    {
      title: "Grade 7 General-Science",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-general%20science_fetena_net_ff42.pdf",
    },
    {
      title: "Grade 7 INFORMATION-TECHNOLOGY",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-INFORMATION%20TECHNOLOGY_fetena_net_d101.pdf",
    },
    {
      title: "Grade 7 Physics",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/physics_fetena_net_fa.pdf",
    },
    {
      title: "Grade 7 Social-Studies",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_25/collection/grade%207-social%20studies_fetena_net_64c4.pdf",
    },
  ],
  "Grade 4": [
    {
      title: "Grade 4 Amharic",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-amharic_fetena_net_c3f0.pdf",
    },
    {
      title: "Grade 4 English",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-english_fetena_net_2d36.pdf",
    },
    {
      title: "Grade 4 Environmental-Science",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-Environmental%20Science_fetena_net_42ad.pdf",
    },
    {
      title: "Grade 4 Maths",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-mathematics_fetena_net_b8e6.pdf",
    },
    {
      title: "Grade 4 Yeiyta Tbebat",
      image: "",
      downloadLink:
        "https://fetena.net/books_asset/books_35/collection/grade%204-የክወናና%20የዕይታ%20ጥበባት_fetena_net_f675.pdf",
    },
  ],
  // Add more grades and books as needed
};

// Function to display grades
function displayGrades() {
  const gradeList = document.getElementById("grade-list");

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
  const gradeSelectionPage = document.getElementById("grade-selection-page");
  const subjectBooksPage = document.getElementById("subject-books-page");

  // Hide grade selection page and show subject books page
  gradeSelectionPage.style.display = "none";
  subjectBooksPage.style.display = "block";

  // Clear previous books
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  // Display books for the selected grade
  const books = booksByGrade[grade] || [];
  books.forEach((book) => {
    const bookCard = document.createElement("a");
    bookCard.classList.add("book-card");
    bookCard.href = book.downloadLink;
    bookCard.setAttribute("download", true);

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div class="book-info">
        <h2>${book.title}</h2>
      </div>
    `;

    bookList.appendChild(bookCard);
  });
}

// Back button functionality
document.getElementById("back-button").addEventListener("click", () => {
  const gradeSelectionPage = document.getElementById("grade-selection-page");
  const subjectBooksPage = document.getElementById("subject-books-page");

  gradeSelectionPage.style.display = "block";
  subjectBooksPage.style.display = "none";
});

// Call the function to display grades on page load
displayGrades();
