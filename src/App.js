import React, { Component } from 'react';
import { SiteHeader, SiteFooter } from "./components/site-header/SiteHeader"

import './App.css';


const car = {
  color: 'red',
  maxSpeed: '180kmph',
  fuel: {
    type: 'petrol',
    tankFill: 0,
    fillTank: (amount) => {
      car.fuel.tankFill = amount
    }
  }
}

class App extends Component {

  componentDidMount(){

  }


  render() {

    const { color } = car

    console.log(color)

    return (
      <div>
        <SiteHeader siteName={'Header 1'}/>
        <SiteHeader siteName={'Header 2'}/>
        <h1>Hello world</h1>
        <SiteFooter/>
        <div className='circle'>
          Hello circle
        </div>
        <img src="./images/amal.jpg" alt=""/>
        <img src="https://lh3.googleusercontent.com/-mjNpZg1Lt_4/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7ob9Iyzxv2u0bPGOiea-xJ71dbWvg/s32-c-mo/photo.jpg" alt=""/>
      </div>
    );
  }
}

export default App;
