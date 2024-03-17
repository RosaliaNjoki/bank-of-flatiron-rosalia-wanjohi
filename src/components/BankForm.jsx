import React, { useState } from 'react';
import './BankForm.css';

const BankForm = ({ onAddTransaction }) => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            date,
            description,
            category,
            amount
        };
        onAddTransaction(newTransaction);
        
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
    };

    return (
      <>  
        <form className = "transaction-form" onSubmit={handleFormSubmit}>
            <label htmlFor="dateInput">Date:</label>
            <input type="date" id="dateInput" value={date} onChange={(e) => setDate(e.target.value)} />
            <input type="text" placeholder = "Description" value={description} onChange={(e) => setDescription(e.target.value)} />
             <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Gift">Gift</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Income">Income</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Housing">Housing</option>
                </select>
                <input placeholder = "Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                 
        </form>
        <button className="t-button" type="submit">Add Transaction</button>
    </>    
    );
};

export default BankForm;
