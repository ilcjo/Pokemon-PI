import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>BIENVENIDOS AL MUNDO POKEMON</h1>
      <Link to='/home'>
        <span>Empezar</span>
      </Link>
    </div>
  )
}
