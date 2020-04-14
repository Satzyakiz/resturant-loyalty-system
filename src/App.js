import React from 'react';

import MainComponent from "./assets/js/MainComponent";
import AddVisit from "./assets/js/AddVisit";
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import data from "./assets/data/data.json";

class App extends React.Component{
  state = {
      visit: 0,
      items: data,
      lastVisit: []
  }
  updateVisit = ()=>{
    this.setState({visit: (this.state.visit+1)%5})
    
  }
  updateLastVisit = (date) =>{
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.state.lastVisit.push(date)
    this.setState({lastVisit : this.state.lastVisit})
  }
  render(){
    return (
      <div className="full-container">
        <Navbar bg="dark fixed-top">
          <Navbar.Brand href="#home">
            <img
              src="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.0-9/79926536_101282921387446_8023776164864589824_n.png?_nc_cat=102&_nc_sid=85a577&_nc_oc=AQn6vBdXGgk8dv1gr9lv3D0gckN69F0OrWdB81HhaV6nYtggVU694wn_szJlKN2TA5E&_nc_ht=scontent.fccu5-1.fna&oh=ea59ee3e6c806141ec77b294970b6ac4&oe=5EBABB8B"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
      
      <div className="App">
        <AddVisit
          update={this.updateVisit}
          updateDate={this.updateLastVisit}
          data={this.state.items}
        />
        <MainComponent 
          visitNo={this.state.visit}
          foodData={this.state.items}
          lastVisitDate={this.state.lastVisit}
        />
        
      </div>
      </div>
    );
  }
}


export default App;
