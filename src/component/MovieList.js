import React, { useState } from 'react'
import Filter from './Filter';
import MovieCard from './MovieCard';


const MoviesList = ({Movies}) => {
    const [text, setText] = useState("");
    const [rate, setRate] = useState("");
    const filterText = (text) =>{
            setText(text)
    }
    const filterRate = (rate) =>{
        setRate(rate);
    }
    return (
        <div className="Cardcontainer">
            <Filter filterRate={filterRate} filterText={filterText}/>
            {Movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el) => (<MovieCard Movie={el}/>))}
        </div>
    )
}
 export default MoviesList;
