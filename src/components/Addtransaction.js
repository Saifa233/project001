import React, {useState} from 'react'

export const Addtransaction = () => {
  const [description,setDescription] = useState();
  const [transactionAmount,setTransactionAmount] = useState ();
    return (
        <div>
        <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input 
                  type="text" 
                  id="description" 
                  placeholder="Detail of Transaction" 
                  value = {description} 
                  onChange = { (e) => setDescription(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">
            Transaction Amount </label>
          <input 
                type="number" 
                id="transactionamount" 
                placeholder="Enter transaction amount..." 
                value = {transactionAmount} 
                onChange = { (e) => setTransactionAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
        
    )
}
