import React, { useEffect, useState } from 'react';
import BankForm from "./BankForm";
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';
import Header from './Header';

const BankApp = () => {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');

    useEffect(() => {
        fetch("https://bank-of-flatiron-i1de.onrender.com/transactions")
            .then(response => response.json())
            .then(data => {
                setTransactions(data);
                setFilteredTransactions(data);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
        setFilteredTransactions([...filteredTransactions, newTransaction]);
    }

    const handleDeleteTransaction = (deletedTransaction) => {
        fetch(`https://bank-of-flatiron-i1de.onrender.com/transactions/${deletedTransaction.id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete transaction');
            }
    
            const updatedTransactions = transactions.filter((transaction) => transaction.id !== deletedTransaction.id);
            setTransactions(updatedTransactions);
            setFilteredTransactions(updatedTransactions);
        })
        .catch(error => {
            console.error('Error deleting transaction:', error);
        });
    }

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        const filtered = transactions.filter(transaction =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTransactions(filtered);
    }

    const sortTransactionsBy = (criteria) => {
        const sortedTransactions = [...filteredTransactions];
        sortedTransactions.sort((a, b) => {
            const itemA = criteria === 'category' ? a.category.toLowerCase() : a.description.toLowerCase();
            const itemB = criteria === 'category' ? b.category.toLowerCase() : b.description.toLowerCase();
            return itemA.localeCompare(itemB);
        });
        setFilteredTransactions(sortedTransactions);
        setSortCriteria(criteria);
    }

    return (
        <div className="bank-app">
            <Header/>
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
            <BankForm onAddTransaction={handleAddTransaction}/>
            <button onClick={() => sortTransactionsBy('category')}>Sort by Category</button>
            <button onClick={() => sortTransactionsBy('description')}>Sort by Description</button>
            {sortCriteria && <span>Sorted by {sortCriteria}</span>}
            <TransactionTable transactions={filteredTransactions} onDeleteTransaction={handleDeleteTransaction} />
        </div>
    );
};

export default BankApp;
