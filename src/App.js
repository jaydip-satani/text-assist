import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("dark mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar about='hello' title='textAssist' mode={mode} toggleMode={toggleMode} />
      <div>
        <Alert alert={alert} />
      </div>
      {/* <Routes> */}
      {/* <Route exact path="/about" element={ */}
      {/* <About mode={mode} /> */}
      {/* } /> */}
      {/* <Route exact path="/" element={ */}
      <div className="container my-3 align-item">
        <TextForm showAlert={showAlert} heading='Enter the text to analyse below' mode={mode} />
      </div>
      {/* } /> */}
      {/* </Routes >
      </Router > */}
    </>
  );
}

export default App;
