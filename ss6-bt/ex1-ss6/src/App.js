
import './App.css';
import {BooksList} from "./components/BooksList";
import { NavLink, Route, Routes} from "react-router-dom";
import {FormCreate} from "./components/BooksCreate";
import {ToastContainer} from "react-toastify";
import {BookEdit} from "./components/BookEdit";


function App() {
    const yourId = "yourIdValue";
    const yourTitle = "yourTitleValue";
  return (
   <>
       <NavLink className={'btn btn-dark'}  to={'/'}>home</NavLink> <br></br>
       <br/>
       {/*<NavLink className={'btn btn-dark'} to={'/edit/:id'}>Edit</NavLink>*/}
       <br></br>
       <NavLink className={'btn btn-dark'} to={'/create'}>Create</NavLink>

       <Routes>
           <Route path={'/'} element={<BooksList />}> </Route>
           <Route path={'create'} element={<FormCreate />}> </Route>
           <Route path={'edit-book'} element={<BookEdit id={yourId} title={yourTitle} />}> </Route>

       </Routes>
       <ToastContainer/>

   </>
  );
}

export default App;
