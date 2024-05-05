import React from 'react'

function AnimalItem( {animal} ) {
  return (
    <li>
    {animal}
    {animal === "Dog" && "★"}
    </li>
  )
}

export default AnimalItem