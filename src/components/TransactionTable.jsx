import React from "react";

const TransactionTable = ({ transactions, onDeleteTransaction }) => {
    const handleDelete = (transaction) => {
        onDeleteTransaction(transaction);
    };

    return (
        <>
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
        </>
    );
};

export default TransactionTable;
