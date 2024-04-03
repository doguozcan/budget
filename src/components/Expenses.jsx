import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Expense from '../components/Expense'

const Expenses = () => {
  const context = useContext(AppContext)
  const expenses = context.state.expenses

  return (
    <div className="my-4">
      <h2 className="text-lg">Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <Expense
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  )
}
export default Expenses
