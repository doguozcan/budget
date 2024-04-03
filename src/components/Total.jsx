import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Total = () => {
  const context = useContext(AppContext)
  return (
    <div className="bg-primary text-primary-content p-3 rounded-sm">
      Total: {context.state.total} TL
    </div>
  )
}
export default Total
