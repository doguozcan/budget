const AddIncome = () => {
  return (
    <form className="flex flex-col gap-2">
      <label>Income</label>
      <div className="flex justify-between gap-2">
        <input
          type="text"
          placeholder="Add income..."
          className="input input-bordered input-success w-full"
        />
        <button className="btn btn-outline btn-success">Add</button>
      </div>
    </form>
  )
}
export default AddIncome
