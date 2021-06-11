import React from 'react';
// import {Link} from 'react-router-dom';

export default function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                {/* as descending bem */}
                    <figure className="cards__item__picture__container" >
                        <img src={require(`../assets/image/${props.image}`).default}  alt={''}/>     
                    </figure>

                    <div className="cards__item_detail">
                        <h5 className="cards__item__text">{props.name}</h5>
        
                    </div>
            </li>     
        </>
    )
}
