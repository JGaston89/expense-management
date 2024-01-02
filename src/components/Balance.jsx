import { useGlobalState } from "../context/GlobalState"

function Balance(){
  const {transactions} = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0)
  

  return(
    <div>
      <h3>Your Balance</h3>
      <h2>${total}</h2>
    </div>
  )
}

export default Balance