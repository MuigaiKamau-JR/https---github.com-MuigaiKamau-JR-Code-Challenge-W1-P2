//Core Deliverables 
// Table to transactions 
//Form to add new transactions 
//Fitler transactions 

// Try advanced deliverableswhen done 


import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import AddTransactionForm from './AddTransactionForm';
import SearchBar from './SearchBar';
import { transactions as initialTransactions } from '../data'; 

const App = () => {
  const [transactions, setTransactions] = useState(initialTransactions); 
  const [searchTerm, setSearchTerm] = useState('');// Check if this works ??? Meant to fetch the transactions 

  
  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    console.log("Updated Transactions:", updatedTransactions);
    setTransactions(updatedTransactions);
  };// The user can add a transaction here
  
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm)
  );// // When the user searches it will filter the trnsactions based on the content searched

  return (
    <div>
      <h1 className="header">The Royal Bank of Flatiron</h1>
      <SearchBar onSearch={handleSearch} />
      <AddTransactionForm onSubmit={addTransaction} setTransactions={setTransactions} transactions={transactions} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;