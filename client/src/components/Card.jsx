import React from 'react'
import './Cards.css'


export default function Card({ name }) {
  return (
    <div className="card-wrapper">
      <h2>{name}</h2>
    </div>
  )
}
