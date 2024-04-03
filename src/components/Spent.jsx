import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Spent = () => {
  const context = useContext(AppContext)
  const expenses = context.state.expenses

  let spent = 0

  for (let i = 0; i < expenses.length; i++) {
    spent += expenses[i].amount
  }

  return (
    <div className="bg-secondary text-secondary-content p-3 rounded-sm">
      Spent: {spent} TL
    </div>
  )
}
export default Spent
