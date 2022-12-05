import './App.css';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message)=>{
      setAlert({
        msg: message,
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
<nav className='navbar navbar-dark bg-primary'>
  <div className="container-fluid">
      <h1><strong><i>
      <img src='apple-icon-152x152.png' height='50px' alt='Logo'/>TextConvo</i></strong></h1>
  </div>
</nav>
<div>
<Alert alert={alert}/>
</div>
<div className="container my-3">
<TextForm showAlert={showAlert}/>
</div>

    </>
  );
}


export default App;
