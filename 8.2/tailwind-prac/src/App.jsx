import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App () {
  return (
    <>
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount Pending"} orderQuantity={13} amount={80000}/>
    </div>
    </>
  )
}

export default App
