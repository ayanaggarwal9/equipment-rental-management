import React from 'react';
import ImageCards from './ImageCards';

class Home extends React.Component{
    render(){
        return(
               <ImageCards list ={this.props.location.state.subcategories} imagePath={`${window.location.origin}/images/category/subcategory/`}/>
        )
    }
}
export default Home;