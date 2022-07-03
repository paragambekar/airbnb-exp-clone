// import Img1 from "../images/img1.png"
import Star from "./images/star.png"
// import imagess from "../images"

import React from "react"





// const square = nums.map((x) => (x*x));
// console.log("square", square);


export default function Card(props){
    console.log(props.item)
    let badgeText;
    if(props.item.openspots === 0){
        badgeText = "SOLD OUT!"
    }else if(props.item.location == "Online"){
        badgeText = "ONLINE"
    }

    // console.log(props);
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`} className="card--image"/>
            <div className="card--stats">
                <img src={Star} className="card--star"></img>
                <span> {props.item.stats.rating } </span>
                <span className="gray"> ({props.item.stats.reviewCount})</span>
                <span className="gray">  • { props.item.location } </span>
                
            </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}