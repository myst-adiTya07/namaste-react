import { useEffect, useState } from "react";

const User = ()=>{
    const[]=useState();

    useEffect(()=>{
        
    },[])
    return(
        <div className="column">
        <div className="user-card">
          <img className="abt-img" src="https://cdn.pixabay.com/photo/2023/08/05/18/11/ai-generated-8171536_1280.png" />
          <div className="team-container">
            <h2>Aditya Gautam</h2>
            <p className="title">DEVeloper Ethusiast</p>
            <p>Student at IIT BHU</p>
            <p>myst-adiTya07</p>
            <p><button className="abt-button">Contact</button></p>
          </div>    
        </div>
      </div>
    );
};

export default User;