import React, { Component } from 'react';
import CartItem from './CartItem';

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
                <CartItem USCurrency={USCurrencyFormat} featureHash={featureHash} selectedOption={selectedOption} feature={feature} />
            )

        });
            
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                {/* <Total></Total> */}
            </section>
            );
          }      
    }

export default CartSummary;
