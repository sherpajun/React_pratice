import React from 'react';
import './Movie.css';

function Movie( {title,year,summary, medium_cover_image, genres} ){
    //console.log(genres);  
    return (
        <div className="movie">
            <img src={medium_cover_image} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title"  >{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres"> 
                {genres.map((item,index)=>{ return <li key={index}   
                className="movie__genre"> {item} </li>})} </ul>
                <p className="movie__summary">{summary}</p>
            </div>
        </div>

    );
}

export default Movie;

