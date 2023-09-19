import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useState} from 'react'
import GreenLightRedLight from './components/GreenLightRedLight';
import Registeration from './components/Registeration';
import './App.css';


const App = () => {
  const [levelVal, setLevel] = useState("Easy")
  const changeLevelStatus = (levelType) => {
    setLevel(levelType)
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Registeration changeLevelStatus={changeLevelStatus} />} />
        <Route exact path="/" element={<GreenLightRedLight details={levelVal} />} />
      </Routes>
    </Router>
  )
}


export default App;
