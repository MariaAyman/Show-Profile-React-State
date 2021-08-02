import React from "react";
import Profile from './Profile.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      shows: false,
      msg: "Show Profile",
      sec: 0
    };
  }
  
  reset = () => {
    //clear interval
    clearInterval(this.timerID);
    //set timer to 0
    this.setState({
      sec: 0
    });
    //tick
    this.timerID = setInterval(
      () => 
        this.setState({
          sec: this.state.sec + 1
        }), 1000
    );
  }

  tick(){
    this.setState({
      sec: this.state.sec + 1
    });
  }

  showProfile = () => {
    this.setState({
      shows: !this.state.shows,
      msg: ((this.state.shows === true) ? "Show Profile" : "Hide Profile")
    });
    console.log(this.state.shows);  
  }

  render(){
    return(
      <div className="container">
        <button onClick={this.showProfile} className="button">{this.state.msg}</button>
        {this.state.shows && (
          <Profile reset={this.reset}/>
        )}
        <h2 style={{color: "#fff"}}>It is {this.state.sec} secounds since mounting</h2>
      </div>
    );
  }
}

export default App;
