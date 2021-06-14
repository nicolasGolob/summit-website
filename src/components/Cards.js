import React, {useState} from 'react';
import CardItem from './CardItem';
import './Cards.css';

export default function Cards() {
    const [activities] = useState([
        
        {  
            id:1,
            name: "Climbing",
            tag:["Rafting","Water"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod",
            path:"./",
            image : 'climbing.jpg'
        },
        {
            id:2,
            name: "Skiing",
            tag:["Rafting","Water"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod",
            path:"./",
            image : 'skiing.jpg'
        },
        {
            id:3,
            name: "Rafting",
            tag:["Rafting","Water"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'rafting.jpg'
        },
        {
            id:4,
            name: "Chilling",
            tag:["Rafting","Water"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'chilling.jpg'
        },
        {
            id:5,
            name: "Parachute",
            tag:["Rafting","Water"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'parachute.jpg'
        },
        {
            id:6,
            name: "Hiking",
            tag:["Rafting","Water"],
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem cum eaque necessitatibus illo libero eius natus suscipit aliquid, fuga, nam earum quod ",
            path:"./",
            image : 'hiking.jpg'
        }
      ]);
    return (
        <section className="cards-section">
            <h2 className="cards-title">PRACTISE WITH THE MOUNTAINS</h2>
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
