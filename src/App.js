import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompoC from './components/CompoC'
import { UserProvider} from './components/userContext'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
function App() {
  return (
    <div className="App">

      {/* Context implementing on components */}
      <UserProvider value="Avinash">
      <CompoC />
      </UserProvider>

      {/*  Http Post and Get Methods  */}

      <PostList />
      <PostForm />

    </div>
  );
}

export default App;
