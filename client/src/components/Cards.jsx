import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import Paginate from './navBar/Paginate'

//renderizo contenedor de las cards
export default function Cards() {
  const { allPokemons } = useSelector((state) => state)
  const { numPage } = useSelector((state) => state)
  const { namePokemons } = useSelector((state) => state)
//consdicion para que entre o el estado global de name o all
  const pokemons = namePokemons.length > 0 ? namePokemons : allPokemons

  // Define estado local para la página actual
  let begining = (numPage - 1) * 12;
  let end = numPage * 12;

  // Cálculo de la cantidad de páginas
  let amountPage = Math.floor(allPokemons.length / 12)

  // Cálculo del rango de pokemons a mostrar en la página actual
  const fetchPokemons = pokemons.slice(begining, end)

  // Función para actualizar la página actual cuando se hace clic en un número de la paginación

  return (
    <div className="card-container">
      {fetchPokemons.map((poke, index) =>
        <Card key={index}
          id={poke.id}
          name={poke.name}
          imag={poke.image}
          types={poke.type}
          attack={poke.attack}
        />
      )}
      <Paginate amountPage={amountPage} />
    </div>
  )

}
