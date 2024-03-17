import React from "react";
import './TransactionTable.css'
const TransactionTable = ({ transactions, onDeleteTransaction }) => {
    const handleDelete = (transaction) => {
        onDeleteTransaction(transaction);
    };

    return (
        <>
        <h4>Transaction History</h4>
          <table> 
           <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Remove</th>     
              </tr>
           </thead>
           <tbody> 
            {transactions.map((transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>${transaction.amount}</td>
                    <td>
                        <button onClick={() => handleDelete(transaction)}>Delete</button>
                    </td>
                </tr>
                ))}
              </tbody>   
            </table> 
            
        </>
    );
};

export default TransactionTable;
