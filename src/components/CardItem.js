import React from 'react';
// import {Link} from 'react-router-dom';

export default function CardItem(props) {
    return (
        <>
            <div className="cards__items">
                <img className="cards__img" src={require(`../assets/image/${props.image}`).default}  alt={''}/>     
                    <div className="cards__details">
                        <h5 className="cards__name">{props.name}</h5>
                        <p className="cards__text">{props.text}</p>
                        {/* <button>Read more</button> */}
                    </div> 
            </div>     
        </>
    )
}
