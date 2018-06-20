import React from "react";
import "./Image.css";

const Image = props => (
    <div className="col-md-2">
        <div className="card">
            <img src={props.url}/>
        </div>
    </div>

)

export default Image;