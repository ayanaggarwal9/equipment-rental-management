import React from 'react'
import ImageCards from './ImageCards';

class EquipmentCatalog extends React.Component {
    render() {
        return (
            <ImageCards list ={this.props.location.state.list} imagePath={`${window.location.origin}/images/category/`}/>
        )
    }
}
export default EquipmentCatalog;