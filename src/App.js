import React from 'react';
import img from './img.png'
import './App.css';
import Task from './components/Tasks';
import Header from './components/Header';

function App() {
  return (
    <div className="Box">
      <img src={img} style={{width:"850px",height:"650px"}}/> 
     <Task/>
    </div>
  );
}

export default App;
