
import React from "react";

export default function Tile(){

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours < 12){
        timeOfDay = "Morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "Afternoon"
    }else{
        timeOfDay = "Night"
    }

    const firstName = "Parag";
    const lastName = "Ambekar"
    return (
        <h1>Hello {firstName} {lastName}. It is {hours%12}. Good {timeOfDay} </h1>
    )

}