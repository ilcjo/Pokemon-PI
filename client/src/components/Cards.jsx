import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import Paginate from './navBar/Paginate'
import { filterAlfabetic, filterAttacks, filterOrder, resetAll, filterTypes } from '../Redux/actions/actions'

//renderizo contenedor de las cards
export default function Cards() {
  const dispatch = useDispatch()
  const { allPokemons } = useSelector((state) => state)
  const { numPage } = useSelector((state) => state)
  const { namePokemons } = useSelector((state) => state)



  console.log('namePokemons:', namePokemons)
  //condicion para que entre o el estado global de name o all
  const pokemons = namePokemons.length > 0 ? namePokemons : allPokemons

  console.log('constPokemons:', pokemons)
  // Define estado local para la página actual
  let begining = (numPage - 1) * 12;
  let end = numPage * 12;

  // Cálculo de la cantidad de páginas
  let amountPage = Math.floor(allPokemons.length / 12)

  // Cálculo del rango de pokemons a mostrar en la página actual ya sea name o all
  const fetchPokemons = pokemons.slice(begining, end)

  // Función para actualizar la página actual cuando se hace clic en un número de la paginación

  /* FUNCIONES FILTROS */

  // funcion para depachar el payload de filtros ascedente y descendente 
  const handlerOrder = (event) => {
    event.preventDefault()
    const { value } = event.target
    dispatch(filterOrder(value))
  }
  // funcion para despachar el payload de filtro alfabetico
  const handlerAlfab = (event) => {
    event.preventDefault()
    const { value } = event.target
    dispatch(filterAlfabetic(value))
  }
  // funcion para filtro higther attack
  const handlerAttack = () => {
    dispatch(filterAttacks())
  }
  //filtro para typo 
  const handlerType = (event) => {
    const { value } = event.target
    dispatch(filterTypes(value))
  }
  // Reset Button
  const handlerReset = () => {
    dispatch(resetAll())
  }

  return (
    <>
      <div>
        <label>
          <input type='checkbox' value='fire' onChange={handlerType} /> Bug
        </label>
        <label>
          <input type='checkbox' value='Dark' onChange={handlerType} /> Dark
        </label>
        <label>
          <input type='checkbox' value='Dragon' onChange={handlerType} /> Dragon
        </label>
        <label>
          <input type='checkbox' value='Electric' onChange={handlerType} /> Electric
        </label>
        <label>
          <input type='checkbox' value='Fairy' onChange={handlerType} /> Fairy
        </label>
        <label>
          <input type='checkbox' value='Fighting' onChange={handlerType} /> Fighting
        </label>
        <label>
          <input type='checkbox' value='Fire' onChange={handlerType} /> Fire
        </label>
        <label>
          <input type='checkbox' value='Flying' onChange={handlerType} /> Flying
        </label>
        <label>
          <input type='checkbox' value='Ghost' onChange={handlerType} /> Ghost
        </label>
        <label>
          <input type='checkbox' value='Grass' onChange={handlerType} /> Grass
        </label>
        <label>
          <input type='checkbox' value='Ground' onChange={handlerType} /> Ground
        </label>
        <label>
          <input type='checkbox' value='Ice' onChange={handlerType} /> Ice
        </label>
        <label>
          <input type='checkbox' value='Normal' onChange={handlerType} /> Normal
        </label>
        <label>
          <input type='checkbox' value='Poison' onChange={handlerType} /> Poison
        </label>
        <label>
          <input type='checkbox' value='Psychic' onChange={handlerType} /> Psychic
        </label>
        <label>
          <input type='checkbox' value='Rock' onChange={handlerType} /> Rock
        </label>
        <label>
          <input type='checkbox' value='Steel' onChange={handlerType} /> Steel
        </label>
        <label>
          <input type='checkbox' value='Water' onChange={handlerType} /> Water
        </label>

      </div>
      <div>
        <select name='order' defaultValue={'DEFAULT'} onChange={handlerOrder}>
          <option value={'DEFAULT'} disable="true" >Select Order</option>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>
      </div>

      <div>
        <select name='alfabetic' defaultValue={'DEFAULT'} onChange={handlerAlfab}>
          <option value={'DEFAULT'} disable="true">Select alfabetic </option>
          <option value='AZ'>A - Z</option>
          <option value='ZA'>Z - A</option>
        </select>
      </div>

      <button name='attackH' onClick={handlerAttack}>Higher Attack</button>
      <button name='reset' onClick={handlerReset}>Reset All</button>


      <div className="card-container">
        {fetchPokemons.map((poke, index) =>
          <Card key={index}
            id={poke.id}
            name={poke.name}
            image={poke.image}
            types={poke.type}
            attack={poke.attack}
          />
        )}
        <Paginate amountPage={amountPage} />
      </div>

    </>
  )

}
