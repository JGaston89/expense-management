import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionList from './components/transaction/TransactionList'
import TrasactionForm from './components/transaction/TransactionForm'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseChart from './components/ExpenseChart'


function App(){
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className='container mx-auto w-3/6 '>
        <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-5'>
          <div>
            <div>
              <h1 className='text-4xl font-bold'>Expense tracker</h1>
            </div>
            <IncomeExpenses/>
            <Balance/>
            <TrasactionForm/>
          </div>
          <div className='flex flex-col flex-1'>
            <ExpenseChart/>
            <TransactionList/>
          </div>
        </div>
        </div>
      </div>
    </GlobalProvider>

  )
}

export default App