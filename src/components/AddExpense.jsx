const AddExpense = () => {
  return (
    <form className="flex flex-col gap-2 my-2">
      <label>Expense</label>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          placeholder="Add expense..."
          className="input input-bordered input-error w-full"
        />
        <button className="btn btn-outline btn-error">Add</button>
      </div>
    </form>
  )
}
export default AddExpense
