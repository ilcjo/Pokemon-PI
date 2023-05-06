import React from 'react'
import './Cards.css'


export default function Card({ name, imag }) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      <img src={imag} alt={name} className='img'></img>
    </div>
  )
}
