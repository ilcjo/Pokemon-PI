import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../Redux/actions/actions'

export default function Paginate({ amountPage }) {
  const { numPage } = useSelector((state) => state)
  const dispatch = useDispatch()

  const nextP = () => {
    dispatch(nextPage())
  }
  const prevP = () => {
    dispatch(prevPage())
  }
  return (
    <div>
      {
        numPage > 1 ? (
          <>
            <button className='btn-primary' onClick={prevP}>Prev</button>
            <span>{numPage - 1}</span>
          </>
        ) : null
      }
      <span>{numPage}</span>
      {
        numPage < amountPage ? (
          <>
            <span>{numPage + 1}</span>
            <button className='btn-primary' onClick={nextP}>Next</button>

          </>
        ) : null

      }

    </div>
  )
}
