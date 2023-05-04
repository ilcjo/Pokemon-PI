import React from 'react'
import './NavBar.css'

export default function SearchBar() {
    return (
      <div>
        <input type ='type' placeholder='Buscar pokemon por Nombre'></input>
        <button className='btn-primary'>Buscar</button>
      </div>
    )

}
