import React, {useState} from 'react';

const Food = ({name, classes, location}) => {
    const [food, setFood] = useState("Unknown Location");
    const [found, setFound] = useState("Unknown Location");
const handleClick = (e) => {
    // console.log(`You choose ${name}`)
    setFood(`${name} is ${classes} and it is grown in ${location}`)

}

const foodClick = (e) => {
    setFound(`${name} is grown in ${location}`)
    }
    return (
        <div>
            <p><b>Food Name: </b>{name} </p>
            <p><b>Food Class:</b> {classes} </p>
            <p><b>Location:</b> {location} </p>
            <p>{food}</p>
            <p>{found}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={foodClick}>Food Class</button>
            <hr />
        </div>
    );
}

export default Food;
