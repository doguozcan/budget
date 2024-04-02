import Total from './components/Total'
import Spent from './components/Spent'
import Remaining from './components/Remaining'
import Expenses from './components/Expenses'
import Incomes from './components/Incomes'
import AddExpense from './components/AddExpense.jsx'
import AddIncome from './components/AddIncome'
import { AppProvider } from './context/AppContext.jsx'

export default function App() {
  return (
    <AppProvider>
      <div className="flex flex-col items-center font-montserrat">
        <div className="flex space-x-2 m-4 w-4/5 justify-around">
          <Total />
          <Spent />
          <Remaining />
        </div>
        <div className="w-4/5 p-2">
          <Expenses />
          <Incomes />
        </div>
        <div className="w-4/5 ">
          <AddIncome />
          <AddExpense />
        </div>
      </div>
    </AppProvider>
  )
}
