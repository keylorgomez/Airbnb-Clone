import React from 'react'
import './style.css'
import Card from './card'
import { list } from '../../assets/cards-list'

function Cards() {
  return (
    <div className='cardsFlex'>
      {list.map((card,i)=>(
        <Card card={card} key={i}/>
      ))}
    </div>
  )
}

export default Cards
