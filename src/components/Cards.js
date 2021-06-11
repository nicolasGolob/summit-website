import React, {useState} from 'react';
import CardItem from './CardItem';
import './Cards.css';


export default function Cards() {

    // const [activities] = useState([
    //     {
    //         id:1,
    //         name: "sport1",
    //         text: "supercool bla blabla blabla bla",
    //         label:"chilling",
    //         image : 'chilling.jpg'
    //     },
    //     {
    //         id:2,
    //         name: "sport2",
    //         text: "parachute bla bla bla blabla blabla bla",
    //         path:"./",
    //         image : 'parachute.jpg'
    //     }
    //   ]);

    return (
        <div className="cards">
            <h2>Practice with the mountains</h2>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards__items">
                    {/* {
                        activities.map(item=> 
                            <CardItem   key={item.id}
                                        name={item.name}
                                        text={item.text}
                                        image={item.image}
                            />                       
                        )
                    } */}

          
                    </ul>
                </div>
            </div>  
        </div>
    )
}
