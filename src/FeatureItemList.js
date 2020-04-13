import React from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

class FeatureItemList extends Component {
     features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
           <FeatureItem updateFeature={this.props.updateFeature} itemHash={itemHash} feature={feature} item={item}> </FeatureItem>
          );
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
    render(){
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default FeatureItemList;