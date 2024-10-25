import React from "react";


function  Home ({ number }) {
    return(
        <div className="App" >
        <div style={{display:"flex"}}>
            <h2>{number.charAt(0)}</h2>
            <h2>{number.charAt(1)}</h2>
            <h2>{number.charAt(2)}</h2>
            <h2>{number.charAt(3)}</h2>
            <h2>{number.charAt(4)}</h2>
            <h2>{number.charAt(5)}</h2>
        </div>    
        </div>
    )

}

export default Home;
