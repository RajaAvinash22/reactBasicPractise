import React from 'react';
import logo from './logo.svg';
import './App.css';
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import RenderCounter from './components/RenderCounter';
function App() {
  return (
    <div className="App">

      {/* Pure Component for class components */}
      <PureComp />
      <ParentComp />

      {/* Refs in react */}
      <RefsDemo />
      <FocusInput />

      {/* Render Props */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User name={()=>'Avinash'} />
      <User render={(isLoggedIn) => isLoggedIn ?'Avinash':'Guest'} />  */}
       <RenderCounter>
        {(count, increement) => (
          <ClickCounter2 count={count} increement={increement} />
        )}
      </RenderCounter>
      <RenderCounter>
        {(count, increement) => (
          <HoverCounter2 count={count} increement={increement} />
        )}
      </RenderCounter> 

    </div>
  );
}

export default App;
