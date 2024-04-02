import Expense from '../components/Expense'

const Expenses = () => {
  const expenses = [
    { id: 1, name: 'Food', amount: 8 },
    { id: 2, name: 'Travel', amount: 42 },
    { id: 3, name: 'Cloth', amount: 128 },
  ]

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
