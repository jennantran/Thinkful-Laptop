import React, {Component} from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

class Feature extends Component{
    render(){
        const options = this.props.features[this.props.currentFeature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
            <FeatureItem key={itemHash} updateFeature={this.props.updateFeature} itemHash={itemHash} feature={this.props.currentFeature} item={item} selected={this.props.selected}/>
            );
        });
        return(
        <fieldset className="feature">
            <legend className="feature__name">
            <h3>{this.props.currentFeature}</h3>
            </legend>
            {options}
        </fieldset>
        );
    }
}
export default Feature; 