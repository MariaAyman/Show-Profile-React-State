import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Person: {
        fullName: "Maria Ayman",
        bio: "Junior React Developer",
        imgSrc: "/profile.png",
        profession: "Engineer"
      },
      shows: false,
      msg: "Show Profile",
      //date: new Date()
      sec: 0
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    // this.setState({
    //   date: new Date()
    // });
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
          <div className="profileCont">
            <img src={this.state.Person.imgSrc} alt="" className="profileImg"/>
            <div>
              <p><span className="span">Full Name:</span> {this.state.Person.fullName}</p>
              <p><span className="span">Bio:</span> {this.state.Person.bio}</p>
              <p><span className="span">Profession:</span> {this.state.Person.profession}</p>
            </div>
          </div>
        )}
        <h2 style={{color: "#fff"}}>It is {this.state.sec} secounds since mounting</h2>
      </div>
    );
  }
}

export default App;
