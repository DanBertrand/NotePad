import React from 'react';

import './style.scss'

const Menu = ( {savedNotes} ) => {

    const parsedArray = (array) => {
        const newArray = array.map((element)=>(JSON.parse(element)))
        return newArray
    }

    const notes = parsedArray(savedNotes)
        
     const displayNotes = notes => notes.map(item => (
    <li key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
    </li>
  ));

		return(
            <ul>{displayNotes(notes)}</ul>
        )
};

export default Menu;
