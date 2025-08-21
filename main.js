import Book from "./module/Book.js";
import Library from "./module/Library.js";
import Member from "./module/Member.js";

// Book Cards
const bookContainer = document.getElementById("book-container");

export function renderBookCard(book) {
  const card = document.createElement("div");

  card.className = "rounded-xl overflow-hidden flex flex-col shadow-sm";
  card.innerHTML = `
    <img
      src="${book.img}"
      alt=""
      class="w-full h-full object-cover"
    />
    <div class="p-5">
      <h1 class="text-3xl font-medium mb-1 lg:text-xl">${book.title}</h1>
      <p class="text-gray-500 mb-8 font-medium">${book.author}</p>
      <div class="flex gap-3 flex-wrap">
        <button
          class="borrow-btn py-2 px-3 border-1 border-indigo-600 text-indigo-600 font-medium rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-indigo-600 hover:text-white"
        >
          Pinjam
        </button>
      </div>
    </div>
  `;

  return card;
}

// Library
const myLibrary = new Library();

// Books
const filosofiTeras = new Book(
  "Filosofi Teras",
  "Henry Manampiring",
  "https://cdn.gramedia.com/uploads/picture_meta/2023/11/27/kjf6cgigkomf6sy9o5qauu.jpg"
);
const perahuKertas = new Book(
  "Perahu Kertas",
  "Dee Lestari",
  "https://cdn.gramedia.com/uploads/items/ID_MIZ2016MTH03PKER_C.jpg"
);
const kambingJantan = new Book(
  "Kambing Jantan",
  "Raditya Dika",
  "https://cdn.gramedia.com/uploads/items/9789797808952C_9789797808952.jpg"
);
const negeri5Menara = new Book(
  "Negeri 5 Menara",
  "Ahmad Fuadi",
  "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/1682/10530/1.jpg"
);
const hujan = new Book(
  "Hujan",
  "Tere Liye",
  "https://cdn.gramedia.com/uploads/items/img20220905_11493451.jpg"
);
const bumi = new Book(
  "Bumi",
  "Tere Liye",
  "https://cdn.gramedia.com/uploads/items/9786020332956_Bumi-New-Cover.jpg"
);

// Menambahkan Card Baru Ke Container Sesuai Array books
myLibrary.addBook(filosofiTeras, bookContainer);
myLibrary.addBook(perahuKertas, bookContainer);
myLibrary.addBook(kambingJantan, bookContainer);
myLibrary.addBook(negeri5Menara, bookContainer);
myLibrary.addBook(hujan, bookContainer);
myLibrary.addBook(bumi, bookContainer);

// Login
// Container Login
const showLoginFormBtn = document.getElementById("show-login-form-btn");
const closeLoginFormBtn = document.getElementById("close-login-form-btn");
const loginForm = document.getElementById("login-form");
const usernameBadge = document.getElementById("member-username-badge");
const showMyBooks = document.getElementById("show-my-books");
const addBooks = document.getElementById("add-books");

showLoginFormBtn.addEventListener("click", () => {
  loginForm.classList.remove("scale-0");
  loginForm.classList.add("scale-100");
});

function closeLoginForm() {
  loginForm.classList.remove("scale-100");
  loginForm.classList.add("scale-0");
}

closeLoginFormBtn.addEventListener("click", () => {
  closeLoginForm();
});

// System Login
const loginBtn = document.getElementById("login-btn");
const usernameInp = document.getElementById("member-username-input");
const idInp = document.getElementById("member-id-input");
const member1 = new Member();

loginBtn.addEventListener("click", () => {
  if (usernameInp.value == "admin" && idInp.value == "admin123") {
    addBooks.classList.remove("hidden");
    addBooks.classList.add("block");

    usernameBadge.textContent = `Welcome, ${usernameInp.value} 😁`;

    usernameBadge.classList.remove("hidden");
    usernameBadge.classList.add("block");

    closeLoginForm();

    showLoginFormBtn.classList.add("hidden");

    borrowBtn.forEach(btn => {
      btn.classList.add('hidden');
    });
  } else if (!usernameInp.value == "" && !idInp.value == "") {
    member1.name = usernameInp.value;
    member1.memberId = idInp.value;

    myLibrary.addMember(member1);

    console.log(member1);

    closeLoginForm();

    showLoginFormBtn.classList.add("hidden");

    usernameBadge.textContent = `Welcome, ${usernameInp.value} 😁`;

    usernameBadge.classList.remove("hidden");
    usernameBadge.classList.add("block");

    showMyBooks.classList.remove("hidden");
    showMyBooks.classList.add("block");
  } else {
    alert("Isi Form Nya Dengan Baik");
  }
});

// Borrow
const borrowBtn = document.querySelectorAll(".borrow-btn");
const borrowLoginAlert = document.getElementById("borrow-login-alert");

borrowBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (usernameBadge.classList.contains("block")) {
      btn.textContent = "Sedang Dipinjam";
      myLibrary.books[index].borrow(`${myLibrary.books[index].title}`);
      member1.borrowBook(myLibrary.books[index], borrowedBookContainer);
      console.log(member1);
    } else {
      borrowLoginAlert.innerHTML = `
        <div class="relative rounded-full size-20 border-2 border-red-600 text-2xl">
          <i class="fa-solid fa-xmark text-red-600 absolute top-1/2 left-1/2 -translate-1/2"></i>
        </div>
        <span class="font-semibold text-sm text-center lg:text-xl">
          Tidak Bisa Meminjam, Login Terlebih Dahulu
        </span>
      `;

      borrowLoginAlert.classList.remove("scale-0");
      borrowLoginAlert.classList.add("scale-100");

      setTimeout(() => {
        borrowLoginAlert.classList.remove("scale-100");
        borrowLoginAlert.classList.add("scale-0");
      }, 1500);
    }
  });
});

// Return
const returnBtn = document.querySelectorAll(".return-btn");

returnBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {});
});

// Render Untuk Buku Yang Sedang Dipinjam
const borrowedBookContainer = document.getElementById(
  "borrowed-book-container"
);

export function renderBorrowedBookCard(book) {
  const card = document.createElement("div");

  card.className = "rounded-xl overflow-hidden flex flex-col shadow-sm";
  card.innerHTML = `
    <img
      src="${book.img}"
      alt=""
      class="w-full h-full object-cover"
    />
    <div class="p-5">
      <h1 class="text-3xl font-medium mb-1 lg:text-xl">${book.title}</h1>
      <p class="text-gray-500 mb-8 font-medium">${book.author}</p>
      <div class="flex gap-3 flex-wrap">
        <button
          class="return-btn py-2 px-3 border-1 border-indigo-600 text-indigo-600 font-medium rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-indigo-600 hover:text-white"
        >
          Kembalikan
        </button>
      </div>
    </div>
  `;

  return card;
}

// Tombol Memunculkan Container Borrowed Books
showMyBooks.addEventListener("click", () => {
  if (bookContainer.classList.contains("grid")) {
    bookContainer.classList.remove("grid");
    bookContainer.classList.add("hidden");

    borrowedBookContainer.classList.remove("hidden");
    borrowedBookContainer.classList.add("grid");

    showMyBooks.textContent = "Back To Library";
  } else {
    bookContainer.classList.remove("hidden");
    bookContainer.classList.add("grid");

    borrowedBookContainer.classList.remove("grid");
    borrowedBookContainer.classList.add("hidden");

    showMyBooks.textContent = "Show My Borrowed Books";
  }
});

// Add Books Form Button
const addBooksForm = document.getElementById("add-books-form");

addBooks.addEventListener("click", () => {
  addBooksForm.classList.remove("scale-0");
  addBooksForm.classList.add("scale-100");
});

// Add Books To Library
const addBookBtn = document.getElementById("add-book-btn");
const addBookTitle = document.getElementById("add-book-title-input");
const addBookAuthor = document.getElementById("add-book-author-input");
const addBookImg = document.getElementById("add-book-img-input");
const closeAddBookFormBtn = document.getElementById("close-add-book-form-btn");

addBookBtn.addEventListener("click", () => {
  if(!addBookTitle.value == '' && !addBookAuthor.value == '' && !addBookImg.value == '') {
    myLibrary.addBook(
      new Book(
        `${addBookTitle.value}`,
        `${addBookAuthor.value}`,
        `${addBookImg.value}`
      ),
      bookContainer
    );
  
    closeAddBookForm();
  } else {
    alert('Isi Form Nya Dengan Baik');
  }
});

closeAddBookFormBtn.addEventListener("click", () => {
  closeAddBookForm();
});

function closeAddBookForm() {
  addBooksForm.classList.remove("scale-100");
  addBooksForm.classList.add("scale-0");
}
