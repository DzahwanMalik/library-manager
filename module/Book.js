import Member from "./Member.js";

class Book {
  constructor(title, author, img) {
    (this.title = title),
      (this.author = author),
      (this.img = img),
      (this.isAvailable = true);
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;

      const borrowSuccessAlert = document.getElementById(
        "borrow-success-alert"
      );

      borrowSuccessAlert.innerHTML = `
        <div class="relative rounded-full size-20 border-2 border-indigo-600 text-2xl">
          <i class="fa-solid fa-check text-indigo-600 absolute top-1/2 left-1/2 -translate-1/2"></i>
        </div>
        <span class="font-semibold text-sm text-center lg:text-xl">
          Anda Berhasil Meminjam Buku ${this.title}
        </span>
      `;

      borrowSuccessAlert.classList.remove("scale-0");
      borrowSuccessAlert.classList.add("scale-100");

      setTimeout(() => {
        borrowSuccessAlert.classList.remove("scale-100");
        borrowSuccessAlert.classList.add("scale-0");
      }, 1500);
    } else {
      const borrowErrorAlert = document.getElementById("borrow-error-alert");

      borrowErrorAlert.innerHTML = `
        <div class="relative rounded-full size-20 border-2 border-red-600 text-2xl">
          <i class="fa-solid fa-xmark text-red-600 absolute top-1/2 left-1/2 -translate-1/2"></i>
        </div>
        <span class="font-semibold text-sm text-center lg:text-xl">
          Mohon Maaf, Buku ${this.title}, Sedang Dipinjam
        </span>
      `;

      borrowErrorAlert.classList.remove("scale-0");
      borrowErrorAlert.classList.add("scale-100");

      setTimeout(() => {
        borrowErrorAlert.classList.remove("scale-100");
        borrowErrorAlert.classList.add("scale-0");
      }, 1500);
    }
  }

  return() {
    this.isAvailable = true;

    const returnSuccessAlert = document.getElementById("return-success-alert");

    returnSuccessAlert.innerHTML = `
      <div class="relative rounded-full size-20 border-2 border-indigo-600 text-2xl">
        <i class="fa-solid fa-check text-indigo-600 absolute top-1/2 left-1/2 -translate-1/2"></i>
      </div>
      <span class="font-semibold text-sm text-center lg:text-xl">
        Anda Berhasil Mengembalikan Buku ${this.title}
      </span>
    `;

    borrowSuccessAlert.classList.remove("scale-0");
    borrowSuccessAlert.classList.add("scale-100");

    setTimeout(() => {
      borrowSuccessAlert.classList.remove("scale-100");
      borrowSuccessAlert.classList.add("scale-0");
    }, 1500);
  }
}

export default Book;
