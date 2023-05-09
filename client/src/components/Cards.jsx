import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import Paginate from './navBar/Paginate'
import { filterAlfabetic, filterAttacks, filterOrder, resetAll, filterTypes } from '../Redux/actions/actions'

//renderizo contenedor de las cards
export default function Cards() {
  const dispatch = useDispatch()
  const { allPokemons } = useSelector((state) => state)
  const { numPage } = useSelector((state) => state)


  //codicion para que entre o el estado global de name o all


  // Define estado local para la página actual
  let begining = (numPage - 1) * 12;
  let end = numPage * 12;
  // Cálculo de la cantidad de páginas
  let amountPage = Math.floor(allPokemons.length / 12)
  // Cálculo del rango de pokemons a mostrar en la página actual ya sea name o all
  const fetchPokemons = allPokemons.slice(begining, end)

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
  useEffect(() => { console.log(allPokemons) }, [allPokemons])
  return (
    <>
      <div>
        <label>
          <input type='checkbox' value='fire' onChange={handlerType} /> Bug
        </label>
        <label>
          <input type='checkbox' value='dark' onChange={handlerType} /> Dark
        </label>
        <label>
          <input type='checkbox' value='dragon' onChange={handlerType} /> Dragon
        </label>
        <label>
          <input type='checkbox' value='electric' onChange={handlerType} /> Electric
        </label>
        <label>
          <input type='checkbox' value='fairy' onChange={handlerType} /> Fairy
        </label>
        <label>
          <input type='checkbox' value='fighting' onChange={handlerType} /> Fighting
        </label>
        <label>
          <input type='checkbox' value='fire' onChange={handlerType} /> Fire
        </label>
        <label>
          <input type='checkbox' value='flying' onChange={handlerType} /> Flying
        </label>
        <label>
          <input type='checkbox' value='ghost' onChange={handlerType} /> Ghost
        </label>
        <label>
          <input type='checkbox' value='grass' onChange={handlerType} /> Grass
        </label>
        <label>
          <input type='checkbox' value='ground' onChange={handlerType} /> Ground
        </label>
        <label>
          <input type='checkbox' value='ice' onChange={handlerType} /> Ice
        </label>
        <label>
          <input type='checkbox' value='normal' onChange={handlerType} /> Normal
        </label>
        <label>
          <input type='checkbox' value='poison' onChange={handlerType} /> Poison
        </label>
        <label>
          <input type='checkbox' value='psychic' onChange={handlerType} /> Psychic
        </label>
        <label>
          <input type='checkbox' value='rock' onChange={handlerType} /> Rock
        </label>
        <label>
          <input type='checkbox' value='steel' onChange={handlerType} /> Steel
        </label>
        <label>
          <input type='checkbox' value='water' onChange={handlerType} /> Water
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
