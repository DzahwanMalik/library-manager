import { renderBorrowedBookCard } from "../main.js";

class Member {
    constructor(name, memberId) {
        this.name = name,
        this.memberId = memberId,
        this.borrowedBooks = []
    }

    borrowBook(book, container) {
        this.borrowedBooks.push(book);

        if(container) {
            const newCard = renderBorrowedBookCard(book);
            container.appendChild(newCard);
        }
    }

    returnBook(book) {

    }

    getBorrowedBook() {
        return `${this.borrowedBooks}`;
    }
}

export default Member;