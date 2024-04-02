import Income from '../components/Income'

const Incomes = () => {
  const incomes = [
    { id: 1, name: 'Rent', amount: 100 },
    { id: 2, name: 'Job', amount: 1000 },
  ]

  return (
    <div className="my-4">
      <h2 className="text-lg">Incomes</h2>
      <ul>
        {incomes.map((income) => (
          <Income key={income.id} name={income.name} amount={income.amount} />
        ))}
      </ul>
    </div>
  )
}
export default Incomes
