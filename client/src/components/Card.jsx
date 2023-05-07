import React from 'react'
import './Cards.css'


export default function Card({ name, imag, types, attack }) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
      <img src={imag} alt={name} ></img>
      <h3>Tipo:</h3>
      <span>{types}</span>
      <h3> Ataque:</h3>
      <span>{attack}</span>

    </div>
  )
}
