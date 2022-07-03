import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Tile from "./components/Tile"
// import Img1 from "./images/img1.png"
// import Star from "./images/star.png"
import data from "./data";
// import Images from "./images"
import "./style.css"

export default function App(){
    
    const cards = data.map((item) => {
        return (

            <Card 
                key = {item.id}
                item = {item}
                // title = {item.title}
                // img = {item.coverImg}
                // rating = {item.stats.rating}
                // reviewCount = {item.stats.reviewCount}
                // price = {item.price}
                // location = "Online"
                // openspots = {item.openSpots}
            />
        )
    });

    return (
        <div>
            <Navbar />
            < Hero/>
            <div className="card-container">
                {cards}
            </div>
             
        </div>
        
    )
}