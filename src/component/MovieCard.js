import React from 'react';
import {Card,Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';


const MovieCard = ({Movie}) => {
    return (
        <div>
            <Card className="bg-dark text-white crd" style={{ width: '30rem', color:'black' }}>
                <Card.Img style={{filter: 'blur(1px)',height:'15rem', borderRadius:"12px"}} alt={Movie.name} variant="top" src={Movie.posterurl} />
                <Card.ImgOverlay>
                    <Card.Title style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>{Movie.name}</Card.Title>
                    <Card.Text style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
                        {Movie.description.substring(0,100)}
                    </Card.Text>
                    <ReactStars
                        value={Movie.rating}
                        edit={false}
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <Button variant="secondary"><Link to={`/description/${Movie.id}`}>Trailer</Link></Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default MovieCard;
