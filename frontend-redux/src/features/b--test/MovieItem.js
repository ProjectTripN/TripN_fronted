import React from 'react';
import Numeral from "numeral";
import { AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import { FaEquals } from "react-icons/fa";

const MovieItem = ({item, onView}) => {
    const {rank, movieNm, salesAmt, audiCnt, rankInten} = item
    return (
        <tr onMouseOver={() => onView(rank)}>
            <td> {rank} </td>
            <td> {movieNm} </td>
            <td> {Numeral(salesAmt).format(0,0)} </td>
            <td> {Numeral(audiCnt).format(0,0)} </td>
            <td> {rankInten <0? <AiFillCaretDown style={{color:'blue'}}/> :
            rankInten === 0? <FaEquals/> : <AiFillCaretUp style={{color:'red'}}/>
            } 
            <span style={{marginLeft:5}}>{rankInten}</span></td>
        </tr>
    );
};

export default MovieItem;