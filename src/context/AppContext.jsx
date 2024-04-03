import { createContext, useReducer } from 'react'

const initialState = {
  total: 1024,
  incomes: [
    { id: 1, name: 'Rent', amount: 32 },
    { id: 2, name: 'Job', amount: 64 },
  ],
  expenses: [
    { id: 1, name: 'Food', amount: 8 },
    { id: 2, name: 'Travel', amount: 42 },
    { id: 3, name: 'Cloth', amount: 128 },
  ],
}

export const AppContext = createContext()

function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
        total: state.total + action.payload.amount,
      }
    case 'REMOVE_INCOME':
      const updatedIncomes = state.incomes.filter(
        (income) => income.id !== action.payload
      )
      const removedIncome = state.incomes.find(
        (income) => income.id === action.payload
      )

      return {
        ...state,
        incomes: updatedIncomes,
        total: state.total - removedIncome ? removedIncome.amount : 0,
      }
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        total: state.total - action.payload.amount,
      }
    case 'REMOVE_EXPENSE':
      const updatedExpense = state.expenses.filter(
        (expense) => expense.id !== action.payload
      )
      const removedExpense = state.expenses.find(
        (expense) => expense.id === action.payload
      )

      return {
        ...state,
        expenses: updatedExpense,
        total: state.total - removedExpense ? removedExpense.amount : 0,
      }
    default:
      return state
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
