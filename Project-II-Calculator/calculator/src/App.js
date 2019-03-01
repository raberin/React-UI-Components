import React from 'react';
import './App.css';

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from "./components/ButtonComponents/ActionButton";
const App = () => {
  return (
    <div className="App">
    <CalculatorDisplay />
    <ButtonContainer />
    </div>
  );
};

export default App;
