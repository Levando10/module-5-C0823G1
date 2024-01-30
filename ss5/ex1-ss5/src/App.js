import './App.css';

import {FormFo} from "./components/FormFo";
import 'bootstrap/dist/css/bootstrap.min.css';

import {StudentList} from "./components/StudentList";
import React from "react";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import {CreateStudent} from "./components/CreateStudent";
import {NotFound} from "./components/NotFound";

function App() {
  return (
      <><br></br><br></br>
        {/*<Link className={'btn btn-dark'}  to={'/'}>home</Link> <br></br>*/}
        {/*  <br></br>*/}
        {/*  <Link className={'btn btn-dark'} to={'/edit/:id'}>Edit</Link>*/}
        {/*  <br></br>*/}
        {/*  <Link className={'btn btn-dark'} to={'/create'}>Create</Link>*/}
          <NavLink className={'btn btn-dark'}  to={'/'}>home</NavLink> <br></br>
          <br></br>
          <NavLink className={'btn btn-dark'} to={'/edit/:id'}>Edit</NavLink>
          <br></br>
          <NavLink className={'btn btn-dark'} to={'/create'}>Create</NavLink>
      <Routes>
          <Route path={'/'} element={<FormFo />}></Route>
          <Route path={'edit/:id'} element={<StudentList />}></Route>
          <Route path={'create'} element={<CreateStudent />}></Route>
          <Route path={'*'} element={<NotFound />}></Route>
      </Routes>
      </>
  );
}

export default App;
