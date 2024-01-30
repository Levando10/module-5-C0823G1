import React from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import { Audio } from 'react-loader-spinner'
export function FormFo() {
    return (
        <>
            <Formik initialValues={{
                name: 'C0823G1',
                age: '23',
                gender: '1',
                lang: ['Java', 'Js']
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Bắt buộc nhập'),
                        // .matches(/^C08_[a-z,A-Z]+$/)
                        age: Yup.number('Nhập số').min(18).max(50).required('Bắt buộc nhập')

                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            console.log(values)

                            toast(`Student name class is ${values.name} age is : ${values.age} gender is :
           ${values.gender === '1' ? "Male" : "FeMale"} Languages : [${values.lang.map(item => item)} ] `);
                        }, 2000)
                    }}>

                {
                    ({isSubmitting}) => (
                        <Form>
                            Name : <Field name={'name'}/> <br/>
                            <ErrorMessage name={'name'} component={'span'} className={'form-err'}/> <br/><br/>
                            Age : <Field name={'age'}/>
                            <ErrorMessage name={'age'} component={'span'} className={'form-err'}/> <br/><br/>

                            <br/><br/>
                            <div className="form-check">
                                <Field className="form-check-input" type="radio" name="gender" id="flexRadioDefault1"
                                       value={'1'}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="radio" name="gender" id="flexRadioDefault2"
                                       value={'2'}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    FeMale
                                </label>
                            </div>
                            <br/>
                            <h1>Check</h1>
                            <br/>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox"
                                       name={'lang'} value="C#" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    C#
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="Java"
                                       name={'lang'}
                                       id="flexCheckChecked2"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked2">
                                    java
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="Js"
                                       name={'lang'}
                                       id="flexCheckChecked3"/>
                                <label className="form-check-label" htmlFor="flexCheckChecked3">
                                    JavaScript
                                </label>
                            </div>
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
            <ToastContainer/>
        </>
    );
}