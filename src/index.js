import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



const Index=()=>{

    return(
        <div>
            <App/>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Index/>
    </React.StrictMode>,
    document.getElementById('root')
);