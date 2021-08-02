import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Person: {
              fullName: "Maria Ayman",
              bio: "Junior React Developer",
              imgSrc: "/profile.png",
              profession: "Engineer"
            }
        }
    }

    
  componentDidMount(){
    this.props.reset();
    this.timerID = setInterval(
        () => 
            this.setState({
                sec: this.state.sec + 1
            }), 1000
    );
  }


    render(){
        return(
            <div className="profileCont">
                <img src={this.state.Person.imgSrc} alt="" className="profileImg"/>
                <div>
                    <p><span className="span">Full Name:</span> {this.state.Person.fullName}</p>
                    <p><span className="span">Bio:</span> {this.state.Person.bio}</p>
                    <p><span className="span">Profession:</span> {this.state.Person.profession}</p>
                </div>
            </div>
        );
    }
}

export default Profile;