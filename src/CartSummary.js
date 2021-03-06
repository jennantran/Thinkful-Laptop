import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

class CartSummary extends Component {
    render(){
        // This object will allow us to
        // easily convert numbers into US dollar values
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
         });
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return(
                <CartItem USCurrency={USCurrencyFormat} key= {featureHash} featureHash={featureHash} selectedOption={selectedOption} feature={feature} />
            )

        });
            
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total USCurrency={USCurrencyFormat} selected={this.props.selected}></Total>
            </section>
            );
          }      
    }

export default CartSummary;
