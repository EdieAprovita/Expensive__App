import React from 'react';

const IncomeExpenses = () => {
  return (
    <div className='inc-exp-container'>
      <h4>Incomer</h4>
      <p className='money plus'>+0.00</p>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
