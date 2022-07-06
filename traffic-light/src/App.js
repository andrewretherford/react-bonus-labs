import './App.css';
import { useState } from 'react';
import ControlPanel from './components/ControlPanel';
import TrafficLight from './components/TrafficLight';

function App() {
  const [stop, setStop] = useState('black')
  const [slow, setSlow] = useState('black')
  const [go, setGo] = useState('black')
  const setFunction = {setStop: setStop, setSlow: setSlow, setGo: setGo}
  const lights = {stop: stop, slow: slow, go: go}
  

  return (
    <section className="App">
      <ControlPanel setFunction={setFunction}/>
      <TrafficLight lights={lights} />
    </section>
  );
}

export default App;
