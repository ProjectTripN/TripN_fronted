import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieView from './MovieView';
import './style.css';
import data from '../assets/api/movie.json'
import Modal from './Modal';

const Movies = () => {
    const [movies, setMovies] = useState(data)
    const [current, setCurrent] = useState(data[0])

    const [modal, setModal] = useState(false)

    const onView= (rank)=>{
        setCurrent(data.find(item => item.rank === rank))
    }

    const onPopup= ()=>{
        setModal(true)
    }

    const onClose= ()=>{
        setModal(false)
    }

    return (
        <div className="gallery">
            <MovieView current={current} onPopup={onPopup}/>
            <MovieList movies={movies} onView={onView}/>
            {
                modal && <Modal current={current} onClose={onClose}/>
            }    
        </div>
    );
};

export default Movies;