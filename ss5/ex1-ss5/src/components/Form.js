import React, { useState, useEffect } from "react";
import { Field, Formik } from 'formik';

function Form() {
  const [state, setState] = useState({
    username: "",
    age: null,
    errormessage: ""
  });
  const handleChange = event => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        err = "Your age must be a number";
      }
    //   if(val === ""){
    //     err = "you submit age in form"
    //   }
    }
    setState({ ...state, [nam]: val, errormessage: err });
  };

  return (
   <div>
  <Formik initialValues={{
    name : 'Văn Độ',
    age : '20',
    gender : '1',
    languages : ['java']
  }} onSubmit={() => {

  }}>
  <Form>
      <h1>
        Hello {state.username} {state.age}
      </h1>
      <p>Enter your name:</p>
      <Field type="text" name="username" onChange={handleChange} />
      <p>Enter your age:</p>
      <Field type="text" name="age" onChange={handleChange} />
      <p> {state.errormessage} </p> 
    </Form>
  </Formik>
   
    </div>
  );
}

export default Form;

//  gui form roi canh bao
// import React, { useState } from "react";

// function Form() {
//   const [state, setState] = useState({
//     username: "",
//     age: null
//   });

//   const handleChange = event =>
//     setState({ ...state, [event.target.name]: event.target.value });

//   const handleSubmit = event => {
//     event.preventDefault();
//     if (!Number(state.age)) {
//       alert("Your age must be a number");
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>
//         Hello {state.username} {state.age}
//       </h1>
//       <p>Enter your name:</p>
//       <input type="text" name="username" onChange={handleChange} />
//       <p>Enter your age:</p>
//       <input type="text" name="age" onChange={handleChange} />
//       <br />
//       <br />
//       <input type="submit" />
//     </form>
//   );
// }

// export default Form;