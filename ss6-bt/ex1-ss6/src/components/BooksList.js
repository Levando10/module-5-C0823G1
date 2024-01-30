import {useEffect, useState} from "react";
import * as bookService from "../service/BooksService"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {findById} from "../service/BooksService";
import {FormCreate} from "./BooksCreate";
import {useNavigate} from "react-router-dom";


export function BooksList() {
    const navigate = useNavigate();

    const [books,setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    const handleDelete = async (bookId) => {
        try {
            await  bookService.deleteBook(bookId);
            const result = await bookService.findAll();
            setBooks(result);
        } catch (e) {
            console.log(e)
        }

    }
    const handleEdit = async (bookId) => {

        try {
           const book =  await  bookService.findById(bookId);
            setEditingBook(book);
            navigate("/edit-book" , {state:{id:book.id,title:book.title,quantity:book.quantity}})

        } catch (e) {
            console.log(e)
        }

    }


    useEffect(() => {
    const fetchApi = async () => {
        try {
            const result = await bookService.findAll();
            setBooks(result);

        } catch (e) {
            console.log(e)
        }
    }
    fetchApi();

    }, []);
    return(
        <>
            <h1>List Book</h1>

               <table cellPadding={'6'} cellSpacing={'6'} border={'1'} className={'table table-hover'}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.title}</td>
                                <td>{book.quantity}</td>
                                <td>
                                    <button
                                        className={'btn btn-dark'}
                                        onClick={() => handleEdit(book.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className={'btn btn-dark'}
                                        onClick={() => handleDelete(book.id)}
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ) )}
                    </tbody>
                </table>

        </>
    )

}