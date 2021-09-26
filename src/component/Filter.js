import React from 'react'
import ReactStars from "react-rating-stars-component";


export default function Filter({filterText,filterRate}) {
    return (
        <div className="filter">
            <input className="form-control f1" type="text" placeholder="Search Here" onChange={(e)=>filterText(e.target.value)}/>
            <ReactStars
                
                count={5}
                onChange={(newRating)=> filterRate(newRating)}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    )
}