import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Earned = () => {
  const context = useContext(AppContext)
  const incomes = context.state.incomes

  let income = 0

  for (let i = 0; i < incomes.length; i++) {
    income += incomes[i].amount
  }

  return (
    <div className="bg-accent text-accent-content p-3 rounded-sm">
      Earned: {income} TL
    </div>
  )
}
export default Earned
