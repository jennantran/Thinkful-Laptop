import React, { Component } from 'react';
import Feature from './Feature.js';

class FeatureItemList extends Component {

    render(){
     const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx; 
        return (
          <Feature key={featureHash} selected = {this.props.selected} features = {this.props.features} currentFeature = {feature} featureHash = {featureHash}/>
        );
      });

        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default FeatureItemList;