class Member {
    constructor(name, memberId) {
        this.name = name,
        this.memberId = memberId,
        this.borrowedBooks = []
    }

    borrowBook(book) {
        
    }

    returnBook(book) {

    }

    getBorrowedBook() {
        return `${this.borrowedBooks}`;
    }
}

export default Member;