import React, {useState} from 'react';
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {

    const [activities] = useState([
        {
            id:1,
            name: "sport1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'chilling.jpg'
        },
        {
            id:2,
            name: "sport2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'parachute.jpg'
        },
        {
            id:3,
            name: "sport3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'climbing.jpg'
        },
        {
            id:4,
            name: "sport4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'skiing.jpg'
        }
      ]);

    return (
        <section className="cards-section">
            <h2>Practice with the mountains</h2>
                <div className="cards-container">
                {
                    activities.map(item=> 
                        <CardItem   key={item.id}
                                    name={item.name}
                                    text={item.text}
                                    image={item.image}
                        />                       
                    )
                }
                </div>
        </section>
    )
}
