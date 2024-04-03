import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Expense = (props) => {
  const { dispatch } = useContext(AppContext)

  const handleClick = (e) => {
    e.preventDefault()

    dispatch({
      type: 'REMOVE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <li className="flex items-center">
      <p className="flex-1">{props.name}</p>
      <div className="badge badge-neutral text-current mr-2">
        {props.amount} TL
      </div>
      <button className="btn btn-xs btn-neutral" onClick={handleClick}>
        Delete
      </button>
    </li>
  )
}
export default Expense
