import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionList from './components/transaction/TransactionList'
import TrasactionForm from './components/transaction/TransactionForm'

function App(){
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TrasactionForm/>
      <TransactionList/>
      <h1>Hello World</h1>
    </GlobalProvider>

  )
}

export default App