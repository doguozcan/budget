const Income = (props) => {
  return (
    <li className="flex items-center justify-between">
      <p>{props.name}</p>
      <div className="badge badge-neutral text-current">{props.amount} TL</div>
    </li>
  )
}
export default Income
