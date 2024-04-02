import Total from './components/Total'
import Spent from './components/Spent'
import Remaining from './components/Remaining'

export default function App() {
  return (
    <div className="flex justify-center space-x-2 m-2 font-montserrat">
      <Total />
      <Spent />
      <Remaining />
    </div>
  )
}
