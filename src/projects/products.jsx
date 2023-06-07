import React from 'react'


const products = [
    {title: 'luz', isFruit:false, id:1},
    {title: 'agua', isFruit:false, id:2},
    {title: 'manzana', isFruit:true, id:3}
]
export default function shoppingList() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}> 
            {product.title}
        </li>
        );

  return (
    <ul>{listItems}</ul>
  )
}

