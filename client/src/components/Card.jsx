import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import './Card.css'


export default function Card({ name, image, types, attack, id }) {
  return (
    <div className="card-wrapper">

      <h2>{name}</h2>
      <img src={image} alt={name} ></img>
      <h3>Tipo:</h3>
      <span>{types}</span>
      <h3> Ataque:</h3>
      <span>{attack}</span>
      <Link to={`/details/${id}`}>
      <button className="btn-primary">Details</button>
      </Link>
    </div>
  )
}
