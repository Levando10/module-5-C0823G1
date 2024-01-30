import logo from './logo.svg';
import './App.css';
import { InputForm } from './components/InputForm';
import { Selector } from './components/Selector';
import { FormHook } from './components/FormHook';
import { CountDown } from './components/CountDown';
import { useState } from 'react';
import MyClock from './components/MyClock';

function App() {
  // const [check,setCheck] = useState(false)
  return (
    <>
      {/* <Selector /> */}
    {/* <InputForm /> */}
    {/* <FormHook /> */}
     {/* {check && <CountDown /> } 
     <button onClick={() => setCheck(!check) }> Click</button> */}
     <MyClock />
    </>
  );
}

export default App;
