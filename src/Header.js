import React from "react"
import "./App.css"
import heart from "./heart.png"

function Header() {
    return (<div className="main">
        <div className="Heading">
            <img className="ProfileImg" src="http://www.blackcircle.media/wp-content/uploads/2019/04/black-circle-png47c-4a62-b41d-149d42a05759.png" />
            <span className="Head">The Practical Dev @ThePracticalDev</span> 
            <span> Learning React? Start small</span>
        </div>
        <div className="Body">
            <img className="Resizing" src="https://harvestlife.org/wp-content/uploads/2016/11/orange-rectangle-image293.png" />  
            <p className="BelowImg">Learning React? Start small.</p>
        </div>
        <div className="Footer">
            <img className="Likes" src={heart} /> 
            <span className="LikesNum">50</span>
        </div>
    </div>)
}

export default Header