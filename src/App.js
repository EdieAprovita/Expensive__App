import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transaction from './components/TransactionList.js';
import Add from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <Add />
      </div>
    </div>
  );
}

export default App;
