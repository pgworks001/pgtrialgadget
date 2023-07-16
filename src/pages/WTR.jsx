import React from 'react';


const WTR = () => {
        let person={
        myName :'James',
        age : 26,
        location : 'ontanrio'
      }
        let colors = ['red', 'green', 'blue']
    return (
        <div>

           
    <h1>Welcome To React</h1>
    <p>lorem</p>
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>

    <h1>Person</h1>
    <h4>My name is: {person.myName.toUpperCase}</h4>
  <p>I am: {person.age}</p>
  {colors.length > 0 && <h2>You have {colors.length} colors</h2>}

  let me = "yyy" ?
        </div>
    );
}

export default WTR;
