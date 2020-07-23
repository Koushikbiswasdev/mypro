import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Channel from './components/Channel';
import Functionclick from './components/Functionclick';
import Form from './components/Form';
import PostList from './components/PostList';
function App() {
     /*<Headers name="Sourav" age='22'>
    <p>Rohit</p>
    <p>Dey</p>
    </Headers>
     <Channel/>
    <Functionclick/>
    <Form/>*/
  return (
    <div className="App">
   <Headers name="Sourav" age='22'/>
    
    <PostList/>
    </div>
  );
}

export default App;
