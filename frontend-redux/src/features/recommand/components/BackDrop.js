import React from 'react';
import "features/recommand/styles/BackDrop.scss";

export default function Backdrop(props) {
    const styleClasses = ["Backdrop",props.show? "BackdropOpen":"BackdropClose"]
    return (
        <div className={styleClasses.join(' ')}></div>
    )
}