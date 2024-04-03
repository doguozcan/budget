import { createContext, useEffect, useReducer } from 'react'

const initialState = JSON.parse(sessionStorage.getItem('appState')) || {
  total: 0,
  incomes: [],
  expenses: [],
}

function calculateTotal(incomes, expenses) {
  const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0)
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0)

  return totalIncome - totalExpense
}

export const AppContext = createContext()

function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_INCOME':
      const newIncomes = [...state.incomes, action.payload]
      return {
        ...state,
        incomes: newIncomes,
        total: calculateTotal(newIncomes, state.expenses),
      }
    case 'REMOVE_INCOME':
      const updatedIncomes = state.incomes.filter(
        (income) => income.id !== action.payload
      )
      return {
        ...state,
        incomes: updatedIncomes,
        total: calculateTotal(updatedIncomes, state.expenses),
      }
    case 'ADD_EXPENSE':
      const newExpenses = [...state.expenses, action.payload]
      return {
        ...state,
        expenses: newExpenses,
        total: calculateTotal(state.incomes, newExpenses),
      }
    case 'REMOVE_EXPENSE':
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      )
      return {
        ...state,
        expenses: updatedExpenses,
        total: calculateTotal(state.incomes, updatedExpenses),
      }
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    sessionStorage.setItem('appState', JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
