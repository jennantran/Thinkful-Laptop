import React from 'react';
import slugify from 'slugify';

class CartItem extends Component{   
  render() {   
      return (
          <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.state.selected[feature].name}
                onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={itemHash} className="feature__label">
                x{item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
    }
}
export default CartItem;