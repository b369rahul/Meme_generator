import './App.css';
import React from 'react';
import Header from './hh';
import Main from "./main"
class App extends React.Component{
    render(){
      return (
        <div>
          <Header/>
          <Main/>
        </div>
      )
    }
}

export default App;
