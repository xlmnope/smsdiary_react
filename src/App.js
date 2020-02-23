import React, { Component } from "react";
import EntryCard from "./components/EntryCard"; 
import './App.css';
import LeftNav from "./components/LeftNav";
//import messages from "./messages.json";
// import axios from 'axios';


//////

class App extends Component {
   deleteForever = () => {
    console.log("deleteforever function");
   
  }
  render() {
    
    return (

      <div className="container-fluid">
        <div className="row">
          <LeftNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="chartjs-size-monitor chartstyle">
              <div className="chartjs-size-monitor-expand chartstyle"
              >
                <div className="setw" ></div>
              </div>
              <div className="chartjs-size-monitor-shrink chartstyle"
              >
                <div className="position">
                </div>
              </div>
            </div>

              <EntryCard
                deleteForever={this.deleteForever}
              >
                </EntryCard>

          
          </main>
        </div>
      </div>
    );
  }
}

export default App;
