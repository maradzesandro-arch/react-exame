import { useDispatch, useSelector } from "react-redux";
import BooksPage from "../../components/BooksPage/BooksPage";
import { addBook, clearBooks } from "../../store/booksSlice";


export default function BookPage() {
  const books = useSelector(state => state.books.books)
  console.log(books)

  const dispatch = useDispatch();

  function handleAddBook() {
    const newBook = {
      id: crypto.randomUUID(),
      title: "ახალი წიგნი",
      author: "ახალი ავტორი",
    };

    dispatch(addBook(newBook));
  }



  return (
    <main >
      <div >
        <button onClick={handleAddBook}>
          წიგნის დამატება
        </button>

        <button
          onClick={() => dispatch(clearBooks())}
        >
          სიის გასუფთავება
        </button>




      </div>

      <BooksPage books={books} />
    </main>
  );
}