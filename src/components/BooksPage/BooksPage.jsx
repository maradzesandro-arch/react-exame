import { useDispatch } from "react-redux";
import { removeBook } from "../../store/booksSlice";
import "./BooksPage.css";

export default function BooksPage({ books }) {

    const dispatch = useDispatch()
    return (<>

        {books.map((book) => (
            <div key={book.id}>
                <div className="books-title">  <h2>{book.title}</h2> </div>
                <div className="books-author"> <p>{book.author}</p> </div>
                <button onClick={() => dispatch(removeBook(book.id))}>წაშლა</button>
            </div>
        ))}

    </>)
}