import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({current, onClose}) => {
    const {thumbUrl, movieNm, director, synop} = current
    return (
        <div className="modal">
            <div className="bg" onClick={onClose}>
                <div className="popup">
                    <h2> { movieNm }</h2>
                    <div>
                        <img src={thumbUrl} alt={movieNm}/>
                    </div>
                    <strong>감독 : {director}</strong>
                    <span onClick={onClose}><AiFillCloseCircle/></span>
                    <p>
                        {synop.slice(0, 110)}...
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;