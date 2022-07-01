import Img1 from "../images/img1.png"
import Star from "../images/star.png"

import React from "react"

export default function Card(){
    return (
        <div className="card">
            <img src={Img1} className="card--image"/>
            <div className="card--stats">
                <img src={Star} className="card--star"></img>
                <span> 5.0&nbsp;</span>
                <span className="gray"> (6)&nbsp; </span>
                <span className="gray">USA </span>
                
            </div>
            <p>
                Life lessons with Katie Zaferes
                </p>
                <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}