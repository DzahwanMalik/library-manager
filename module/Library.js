import { renderBookCard } from "../main.js";

class Library {
    constructor() {
        this.books = [],
        this.members = []
    }

    addBook(book, container) {
        this.books.push(book);

        if(container) {
            const newCard = renderBookCard(book);
            container.appendChild(newCard);
        }
    }

    addMember(member) {
        this.members.push(member);
    }
}

export default Library;