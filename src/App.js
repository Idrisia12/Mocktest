import React from 'react';
import './App.css';
import Card from './Card'
import red from "../src/icon-team-builder2.svg";
import blue from "../src/icon-calculator2.svg";
import yellow from "../src/icon-karma2.svg";
import green from "../src/icon-supervisor2.svg";

import {GlobalStyle, Title, Text, Wrapper, Component} from './Styles.js'

function App() {
  return (
    <div className="App">
    <GlobalStyle />
    <Title>
       Reliable, efficient delivery<br />
       <span style={{fontWeight: "bolder"}}>Powered by Technology</span>
    </Title>
    <Text className="details">Our Artificial Intelligence powered tools use millions of project data <br />points to ensure that your project is successful</Text>

    <Wrapper>
    <Component className="green">
      <Card title="Supervisor" image={green} paragraph="Monitors activity to identify project roadblocks"/>
    </Component>

    <Component className="red">
      <Card title="Team Builder" image={red} paragraph="Scans our talent network to create the optimal team for your project"/>
    </Component>

    <Component className="yellow">
      <Card title="Karma" image={yellow} paragraph="Regularly evaluates our talent to ensure quality"/>
   </Component>

   <Component className="square blue">
      <Card title="Calculator" image={blue} paragraph="Uses data from past projects to provide better delivery estimates"/>
   </Component>
    </Wrapper>
    </div>
  )
}


export default App;
