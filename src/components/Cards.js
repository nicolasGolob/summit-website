import React, {useState} from 'react';
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {
    const [activities] = useState([
        
        {  
            id:1,
            name: "Climbing",
            tag:"climbing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod",
            path:"./",
            image : 'climbing.jpg'
        },
        {
            id:2,
            name: "Skiing",
            tag:"ski",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod",
            path:"./",
            image : 'skiing.jpg'
        },
        {
            id:3,
            name: "Rafting",
            tag:"Rafting",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'rafting.jpg'
        },
        {
            id:4,
            name: "Chilling",
            tag:"chilling",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'chilling.jpg'
        },
        {
            id:5,
            name: "Parachute",
            tag:"parachute",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'parachute.jpg'
        },
        {
            id:6,
            name: "Hiking",
            tag:"chilling",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'hiking.jpg'
        }
      ]);

    return (
        <section className="cards-section">
            <h2>Practice with the mountains</h2>
                <div className="cards-container"> {
                    activities.map(item=> 
                        <CardItem   key={item.id}
                                    image={item.image}
                                    name={item.name}
                                    text={item.text}
                        />                       
                    )
                }
                </div>
        </section>
    )
}
