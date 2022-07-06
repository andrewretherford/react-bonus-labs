import './App.css';
import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import TrafficLight from './components/TrafficLight';

function App() {
const [activeLight, setActiveLight] = useState('none')
  
  return (
    <section className="App">
      <ControlPanel setActiveLight={setActiveLight}/>
      <TrafficLight activeLight={activeLight} />
    </section>
  );
}

export default App;
