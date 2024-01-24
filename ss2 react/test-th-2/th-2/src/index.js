import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
const students = [
    {
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany'
    },
    {
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico'
    },
    {
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria'
    },
    {
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK'
    },
    {
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada'
    },
    {
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy'
    }
  ]
  root.render(
    <div>
        <h1>List students</h1>
        <table className='table table-hover'>
            <tr>
                <th>company</th>
                <th>contact</th>
                <th>country</th>
            </tr>
            {students.map((item) => (  <tr>
                    <td>{item.company} </td>
                    <td>{item.contact} </td>
                    <td>{item.country} </td>

            </tr>) )}
        </table>
    </div>

  )





// const fruits = new Array("Apple", "Banana", "Orange", "Apricot", "Black rowan","Cranberry"); 

// const tick = () => {
//     root.render(
//         <div>
//             <h2>Time now!!!</h2>
//             <p>Its is {new Date().toLocaleTimeString()} </p>
//             <h4>Browser's details: {navigator.userAgent}</h4>
//         </div>
//     )
// }
// setInterval(tick,1000)



// root.render(
//     React.createElement("h1",{style: {textAlign:"center",color:"red"} },name)
// );

{/* <div>
        <h1 >List fruits</h1>
        <ul>
           {fruits.map((item) => (<li> {item} </li>) )}
        </ul>
    </div> */}


// root.render(
//     // React.createElement("h1", { style: { textAlign: "center" } }, name)
//     React.createElement("h1",{style: {textAlign: "center"}},name)
//   );



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
