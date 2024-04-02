import Total from './components/Total'
import Spent from './components/Spent'
import Remaining from './components/Remaining'
import Expenses from './components/Expenses'
import Incomes from './components/Incomes'

export default function App() {
  return (
    <div className="flex flex-col items-center font-montserrat">
      <div className="flex space-x-2 m-4">
        <Total />
        <Spent />
        <Remaining />
      </div>
      <div className="w-1/2 max-w-lg">
        <Expenses />
        <Incomes />
      </div>
    </div>
  )
}
