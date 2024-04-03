import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'

const AddIncome = () => {
  const { dispatch } = useContext(AppContext)

  const [incomeName, setIncomeName] = useState('')
  const [incomeAmount, setIncomeAmount] = useState('')

  const canSubmit =
    incomeName !== '' && incomeAmount !== '' && !isNaN(incomeAmount)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: 'ADD_INCOME',
      payload: {
        id: uuidv4(),
        name: incomeName,
        amount: parseInt(incomeAmount),
      },
    })

    setIncomeAmount('')
    setIncomeName('')
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label>Income</label>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          placeholder="Income..."
          className="input input-bordered input-success w-full"
          value={incomeName}
          onChange={(e) => setIncomeName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount..."
          className="input input-bordered input-success w-full"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <button disabled={!canSubmit} className="btn btn-outline btn-success">
          Add
        </button>
      </div>
    </form>
  )
}
export default AddIncome
