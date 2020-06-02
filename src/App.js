import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/funC';
import Welcome from './components/classC';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* when u have clue to pass properties u can pass by attributes */}
      
      {/* function components props */}
      <Greet name="VIRAT" heroName="Chikoo">
        <p>Hello Captain</p>
      </Greet>
      <Greet name="DHONI" heroName="Thalla" />

      {/* class component props */}
      <Welcome name="VIRAT" heroName="Chikoo" />
      
       <Welcome name="DHONI" heroName="Thalla" /> 

      {/* JSX Basics */}
       <Hello />

       {/* State passing from one compo to another */}
      <Message />

      {/* setState method in detail */}
      <Counter />
    </div>
  );
}

export default App;
