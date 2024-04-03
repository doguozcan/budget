import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const context = useContext(AppContext)
  const expenses = context.state.expenses
  const total = context.state.total

  let remaining = total

  for (let i = 0; i < expenses.length; i++) {
    remaining -= expenses[i].amount
  }

  return (
    <div className="bg-accent text-accent-content p-3 rounded-sm">
      Remaining: {remaining} TL
    </div>
  )
}
export default Remaining
