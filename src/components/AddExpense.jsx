import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpense = () => {
  const { dispatch } = useContext(AppContext)

  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')

  const canSubmit =
    expenseName !== '' && expenseAmount !== '' && !isNaN(expenseAmount)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: 'ADD_EXPENSE',
      payload: {
        id: uuidv4(),
        name: expenseName,
        amount: parseInt(expenseAmount),
      },
    })

    setExpenseName('')
    setExpenseAmount('')
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label>Expense</label>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          placeholder="Expense..."
          className="input input-bordered input-warning w-full"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount..."
          className="input input-bordered input-warning w-full"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button disabled={!canSubmit} className="btn btn-outline btn-warning">
          Add
        </button>
      </div>
    </form>
  )
}
export default AddExpense
