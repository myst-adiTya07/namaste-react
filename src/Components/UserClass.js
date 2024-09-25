import {Component} from "react";


class UserClass extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            userInfo : {
                name : "Dummy",
                location : "Default",
            }
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/myst-adiTya07")
        const json = await data.json();


        this.setState({
            userInfo:json,
        })

        console.log(json);
    }


    render(){
        const {login,location,avatar_url} = this.state.userInfo;
        return(
        <div className="column">
          <div className="user-card">
            <img className="abt-img" src={avatar_url} />
            <div className="team-container">
                <h2>{login}</h2>
                <p className="title">{this.props.desig}</p>
                <p>{this.props.location}</p>
                <p>Captain Marvel</p>
                <p><button className="abt-button">Contact</button></p>
            </div>
        </div>
      </div>
        )
    }
}

export default UserClass;