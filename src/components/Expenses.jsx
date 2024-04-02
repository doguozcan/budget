import Expense from '../components/Expense'

const Expenses = () => {
  return (
    <div>
      <h2 className="my-4">Expenses</h2>
      <ul>
        <Expense />
        <Expense />
        <Expense />
      </ul>
    </div>
  )
}
export default Expenses
