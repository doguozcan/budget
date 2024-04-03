import Total from './components/Total'
import Spent from './components/Spent'
import Earned from './components/Earned.jsx'
import Expenses from './components/Expenses'
import Incomes from './components/Incomes'
import AddExpense from './components/AddExpense.jsx'
import AddIncome from './components/AddIncome'
import { AppProvider } from './context/AppContext.jsx'

export default function App() {
  return (
    <AppProvider>
      <div className="flex justify-center items-center overflow-y-auto">
        <div className="flex flex-col items-center font-montserrat">
          <div className="flex m-4 w-4/5 justify-between">
            <Total />
            <Spent />
            <Earned />
          </div>
          <div className="w-4/5">
            <Expenses />
            <Incomes />
          </div>
          <div className="w-4/5 flex flex-col space-y-2">
            <AddIncome />
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}
