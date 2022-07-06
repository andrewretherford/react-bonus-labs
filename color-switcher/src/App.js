import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import ColorList from './components/ColorList';

function App() {
  const [colorArray, setColorArray] = useState(['white', 'gray', 'blue', 'green'])
  // const [currentColor, setCurrentColor] = useState(colorArray[0])

  function submitHandler(e) {
    e.preventDefault()
    setColorArray((current) => [...current, e.target[0].value])
  }

  function clickHandler(e) {
    document.body.style.backgroundColor = e.target.className
  }

  return (
    <div className="App">
      <h1>Color Scheme Switcher</h1>
      <p>Try clicking on one of the colors to change the background color on this page!</p>
      <Form
        submitHandler={submitHandler}
      />
      <ColorList
        colorArray={colorArray}
        clickHandler={clickHandler}
      />
    </div>
  );
}

export default App;