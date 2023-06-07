const people = ['Mateo Vasquez: Matematicas','Julio Ospina: Ingeniero de software','Ana Perez: QA','Felipe Ruiz: Diseñador','Andrea Gonzalez: Desarrolladora'];


import React from 'react'

export default function list() {
    const listItems = people.map(person=>
        <li>{person}</li>
    );
  return <ul>{listItems}</ul>
  
}

