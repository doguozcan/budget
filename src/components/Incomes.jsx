import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Income from '../components/Income'

const Incomes = () => {
  const context = useContext(AppContext)
  const incomes = context.state.incomes

  return (
    <div className="my-4">
      <h2 className="text-lg">Incomes</h2>
      {incomes.length === 0 ? (
        'No incomes yet'
      ) : (
        <ul>
          {incomes.map((income) => (
            <Income key={income.id} name={income.name} amount={income.amount} />
          ))}
        </ul>
      )}
    </div>
  )
}
export default Incomes
