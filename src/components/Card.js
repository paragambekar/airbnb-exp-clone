// import Img1 from "../images/img1.png"
import Star from "./images/star.png"
// import imagess from "../images"

import React from "react"





// const square = nums.map((x) => (x*x));
// console.log("square", square);


export default function Card(props){

    let badgeText;
    if(props.openspots === 0){
        badgeText = "SOLD OUT!"
    }else if(props.location == "Online"){
        badgeText = "ONLINE"
    }

    console.log(props);
    return (
        <div className="card">
            {<div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src={Star} className="card--star"></img>
                <span> {props.rating } </span>
                <span className="gray"> ({props.reviewCount})</span>
                <span className="gray">  • { props.location } </span>
                
            </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}