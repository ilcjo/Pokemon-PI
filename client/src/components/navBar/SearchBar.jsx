import React, { useEffect, useState } from 'react'
import './NavBar.css'
import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNamePokemons } from '../../Redux/actions/actions'



export default function SearchBar() {
  const dispatch = useDispatch()
  //const { namePokemons } = useSelector((state) => state)
  const [searchTerms, setSearchTerms] = useState('')


  const handleSearch = () => {
    dispatch(getNamePokemons(searchTerms))
  }

  // useEffect(() => {
  //   dispatch(getNamePokemons(searchTerms))
  // }, [searchTerms, dispatch]
  // )
  return (
    <div>
      <input type='text'
        placeholder='Buscar pokemon por Nombre'
        value={searchTerms}
        onChange={(event)=> setSearchTerms(event.target.value)}
        className="input">
      </input>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
