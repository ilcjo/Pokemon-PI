import React, { useEffect, useState } from 'react'
import './NavBar.css'
import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNamePokemons } from '../../Redux/actions/actions'

export default function SearchBar() {

  const dispatch = useDispatch()
  const [searchTerms, setSearchTerms] = useState('')
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null)



  const handleSearch = () => {
      dispatch(getNamePokemons(searchTerms))
    }
  
  return (
    <div>
      <input type='text'
        placeholder='Buscar pokemon por Nombre'
        value={searchTerms}
        onChange={(event) => setSearchTerms(event.target.value)}
        className="input_search">
      </input>
      <button onClick={handleSearch}>Search</button>

    </div>
  )
}
