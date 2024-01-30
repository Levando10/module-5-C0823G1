import {ErrorMessage, Field, Form, Formik} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import { Audio } from 'react-loader-spinner'
import * as bookService from "../service/BooksService"
import {useNavigate} from "react-router-dom";

export function FormCreate() {
     const navigate = useNavigate();
    return(
        <>
            <Formik initialValues={{
                title:'',
                quantity:''
            }} validationSchema={Yup.object({
                title: Yup.string().required("Bắt buộc nhập không được để trống"),
                quantity: Yup.number('Nhập số').min(0).required("Bắt buộc nhập không được để trống")
            })}
                    onSubmit={(values,{setSubmitting}) =>{
                        const createBook = async (values) => {
                            setSubmitting(false)
                            await bookService.save(values)
                            toast(`Book add success`)
                            navigate("/")
                    }
                        createBook(values);
                    } }>
                {
                    ({isSubmitting}) => (
                        <Form>
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