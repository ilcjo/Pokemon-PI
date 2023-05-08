import React from 'react'

export default function Filters() {

    
  const handlerOrder =(event) =>{
    const {value} = event.target
    dispatch(filterOrder(value))
  }

  const handlerFilterType = (event) =>{
    const {value} = event.target
    dispatch(filterTypes(value))
  }
  return (
    <div>
       <select name='order' defaultValue={'DEFAULT'} onChange={handlerOrder}>
      <option value={'DEFAULT'} disable>Select order</option>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>
      <div>
        <input id= 'type1' type='checkbox' name='types'  checked={type === 'electric'} value='electric' onChange={handlerFilterType}></input>
        <label htmlFor='type1' >Electric</label>
      </div>
      <button>Reset</button>
    </div>
  )
}
