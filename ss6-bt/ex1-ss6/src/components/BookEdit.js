import {ErrorMessage, Field, Form, Formik} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import { Audio } from 'react-loader-spinner'
import * as bookService from "../service/BooksService"
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function BookEdit() {
    const navigate = useNavigate();
    const  location = useLocation();
    const { id, title,quantity } = location.state || {};
    useEffect(() => {

        const { id, title,quantity } = location.state || {};
    }, [location.state]);

    return(
        <>
            <Formik initialValues={{
                id:`${id}`,
                title:`${title}`,
                quantity:`${quantity}`
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