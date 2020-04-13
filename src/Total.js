import React from 'react';

function Total(props) {
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,
    0
  );
return(
  <div className="summary__total">
  <div className="summary__total__label">Total</div>
  <div className="summary__total__value">
    {USCurrencyFormat.format(total)}
  </div>
</div>
)}

export default Total;