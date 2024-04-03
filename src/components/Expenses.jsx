import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Expense from '../components/Expense'

const Expenses = () => {
  const context = useContext(AppContext)
  const expenses = context.state.expenses

  return (
    <div className="my-4">
      <h2 className="text-lg">Expenses</h2>
      {expenses.length === 0 ? (
        'No expenses yet'
      ) : (
        <ul>
          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              name={expense.name}
              amount={expense.amount}
              id={expense.id}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
export default Expenses
