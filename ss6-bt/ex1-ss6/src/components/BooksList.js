import {useEffect, useState} from "react";
import * as bookService from "../service/BooksService"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function BooksList() {
    const [bookToDelete, setBookToDelete] = useState(null);

    const handleShow = (bookId) => {
        setBookToDelete(bookId);
    };

    const handleClose = () => {
        setBookToDelete(null);
    };

    const [show, setShow] = useState(false);



    const navigate = useNavigate();

    const [books,setBooks] = useState([]);
    const handleDelete = async (bookId) => {
        console.log(bookId)
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
            // navigate("/edit-book" , {state:{id:book.id,title:book.title,quantity:book.quantity}})
            navigate("/edit-book",{state:{book:book}})

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

                                    <Button variant="danger" onClick={() => handleShow(book.id)}>
                                        Delete
                                    </Button>
                                    <Modal show={bookToDelete === book.id} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>you want to delete this {book.title} </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => handleDelete(book.id)}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>




                                </td>

                            </tr>
                        ) )}
                    </tbody>
                </table>



        </>
    )

}