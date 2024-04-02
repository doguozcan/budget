import Total from './components/Total'
import Spent from './components/Spent'
import Remaining from './components/Remaining'
import Expenses from './components/Expenses'
import Incomes from './components/Incomes'

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2 font-montserrat m-4">
        <Total />
        <Spent />
        <Remaining />
      </div>
      <Expenses />
      <Incomes />
    </div>
  )
}
