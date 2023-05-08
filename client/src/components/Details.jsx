import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailPokemon } from '../Redux/actions/actions'

export default function Details() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const pokemon = useSelector((state) => state.detailPokemon)

  useEffect(() => {
    dispatch(getDetailPokemon(id))
  }, [dispatch, id])

  return (
    <div>
      <span>{id}</span>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} ></img>
      <h3>Tipo:</h3>
      <span>{pokemon.types}</span>
      <h3> Ataque:</h3>

    </div>
  )
}
