import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassClick from './components/ClassClick'
import FuncClick from './components/FuncClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Form from './components/Form'

function App() {
  return (
    <div className="App">

       {/* handling event with funcComponent */}
      <FuncClick />

      {/* handling event with classComponent */}
      <ClassClick />

      {/* binding of Event Handlers */}
      <EventBind />

      {/* child compo want to communicate with parent compo with passing arguments in child*/}
      <ParentComponent />

      {/* Conditional Rendering */}
      <UserGreeting />

      {/* List REndering */}
      <NameList />

      {/* Basics of form */}
      {/* Basics of form */}
      <Form />
    </div>
  );
}

export default App;
