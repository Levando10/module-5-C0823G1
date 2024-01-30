import {ErrorMessage, Field, Form, Formik} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import { Audio } from 'react-loader-spinner'
import * as bookService from "../service/BooksService"
import {useLocation, useNavigate} from "react-router-dom";

export function BookEdit() {
    const navigate = useNavigate();
    const  location = useLocation();
    // const { id, title,quantity } = location.state ;
    const data = location.state
    console.log(data.book.id)


    return(
        <>
            <Formik initialValues={{
                id:`${data.book.id}`,
                title:`${data.book.title}`,
                quantity:`${data.book.quantity}`
            }} validationSchema={Yup.object({
                title: Yup.string().required("Bắt buộc nhập không được để trống"),
                quantity: Yup.number('Nhập số').min(0).required("Bắt buộc nhập không được để trống")
            })}
                    onSubmit={(values,{setSubmitting}) =>{
                        const editBook = async (values) => {

                            setSubmitting(false)
                            await bookService.save(values)
                            toast(`Book edit success`)
                            navigate("/")
                        }
                        console.log(values)
                        editBook(values);
                    } }>
                {
                    ({isSubmitting}) => (
                        <Form>
                            <Field  type={'hidden'} name={'id'}   /> <br/>
                            Title : <Field name={'title'}/> <br/>
                            <ErrorMessage name={'title'} component={'span'} className={'form-err'}/> <br/><br/>
                            Quantity : <Field name={'quantity'}/>
                            <ErrorMessage name={'quantity'} component={'span'} className={'form-err'}/> <br/><br/>
                            <br/><br/>
                            <br/>
                            {isSubmitting ? <Audio
                                height="80"
                                width="80"
                                radius="9"
                                color="green"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            /> : <button type={"submit"} className={'btn btn-dark'}>Submit </button>}
                        </Form>
                    )
                }
            </Formik>

        </>
    )

}

<script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
        integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
        crossOrigin="anonymous"
        referrerpolicy="no-referrer"></script>