import React, { Component } from 'react';
import './App.css';

// Importing images from assets folder
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";

// Import Components
import Header from "./components/Header";
import FeatureImg from "./components/FeatureImg";

const color_font_white ={
  color: 'white'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FeatureImg img={bg1} title="RS-O" shop="RS-O Sound" sub="Tune In."/>
        <FeatureImg img ={bg2} title="Puma X Tyakasha" shop="Tyakasha" sub="Snack Time." style={color_font_white}/>
      </div>
    );
  }
}

export default App;
