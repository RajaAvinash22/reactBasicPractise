import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero'
import ErrorBound from './components/ErrorBound'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import PortalDemo from './components/PortalDemo';
import FRParentInput from './components/FRParentInput'

function App() {
  return (
    <div className="App">

       {/* ERRROR Boundary */}
      <ErrorBound>
      <Hero heroName="BatMan" />
      </ErrorBound>
      <ErrorBound>
      <Hero heroName="IronMan" />
      </ErrorBound>
      <ErrorBound>
      <Hero heroName="Joker" />
      </ErrorBound>

      {/* Higher order compo */}
       <ClickCounter name='Avinash'/>
      <HoverCounter />

       {/* FrageMents */}
      <FragmentDemo />
      <Table />

      {/* Portal for rendering DOM */}
      <PortalDemo />

      {/* Forwarding Refs */}
      <FRParentInput />

    </div>
  );
}

export default App;
