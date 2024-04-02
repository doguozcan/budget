import Expense from '../components/Expense'

const Expenses = () => {
  return (
    <div className="my-4">
      <h2>Expenses</h2>
      <ul>
        <Expense />
        <Expense />
        <Expense />
      </ul>
    </div>
  )
}
export default Expenses
