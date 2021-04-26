import React from 'react';
import ImageCard from './ImageCard';

class ImageCards extends React.Component{
    render(){
        return(<div className='d-flex flex-wrap justify-content-between'>
             {this.props.list.map(item=> <ImageCard item={item} imagePath={this.props.imagePath}/>)}
        </div>
           
        )
    }
}

export default ImageCards;