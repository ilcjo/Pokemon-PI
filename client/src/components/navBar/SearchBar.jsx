import React, { useEffect, useState } from 'react'
import './NavBar.css'
import './SearchBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNamePokemons } from '../../Redux/actions/actions'



export default function SearchBar() {
  const dispatch = useDispatch()
  const [searchTerms, setSearchTerms] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { namePokemons } = useSelector((state) => state)

  
  const handleSearch = () => {
   if (searchTerms.length > 0) {
      setLoading(true)
      setError(null)
      dispatch(getNamePokemons(searchTerms))
        .then(() => setLoading(false))
        .catch((err) => {
          setLoading(false)
        
        })
    }

  }
  useEffect(() => {
    if (namePokemons.length > 0 || loading) {
      setSearchTerms('')
    }
  }, [namePokemons, loading])

  return (
    <div>
    {error && <span>Error: {error}</span>}
      <input type='text'
        placeholder='Buscar pokemon por Nombre'
        value={searchTerms}
        onChange={(event) => setSearchTerms(event.target.value)}
        className="input">
      </input>
      <button onClick={handleSearch}>Search</button>
      {loading && <h1>Loading...</h1>}
      
    </div>
  )
}
