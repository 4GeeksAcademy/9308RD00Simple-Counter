//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application


var counter = 0;
const someFunc = () => {
    counter++;
    var numString = "00000" + counter;
    numString = numString.slice(-6);
    
    ReactDOM.createRoot(document.getElementById('app')).render(<Home number={numString}/>);
}
setInterval(someFunc, 1000);