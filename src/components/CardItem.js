import React from 'react';
export default function CardItem(props) {
    return (
        <>
            <div className="cards__items">
                <img className="cards__img" src={require(`../assets/image/${props.image}`).default}  alt={''}/>     
                    <div className="cards__details">
                        <h5 className="cards__name">{props.name}</h5>
                        <p className="cards__text">{props.text}</p>
                    </div> 
            </div>     
        </>
    )
}
