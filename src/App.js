import './App.css';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <div className='bg-blue-800'>
        <div className="p-5 container m-auto flex justify-start gap-5">
        <img src='apple-icon-152x152.png' className='h-10 ' alt='Logo' />
          <h1 className='my-auto text-3xl text-white'><strong><i>TextConvo</i></strong></h1>
        </div>
      </div>
      <div className='container m-auto'>
        <div>
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <TextForm showAlert={showAlert} />
        </div>

      </div>
    </>
  );
}


export default App;
