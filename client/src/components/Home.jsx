import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getAllPokemons } from '../Redux/actions/actions';
import SearchBar from './navBar/SearchBar'
import Cards from './Cards'
import './navBar/NavBar.css'
import './Home.css'


export default function Card() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])


  return (
    <div>
      <h1>Todos los Pokemons estan en su HOME XD</h1>
      <SearchBar />
      <Cards />
    </div>
  )
}
