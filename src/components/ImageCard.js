import React from 'react';
import { withRouter } from 'react-router-dom';
import dummyImage from './dummyImage.png';

class ImageCard extends React.Component {
    image =this.props.item.image ? this.props.item.image : dummyImage;
    redirect = (item) => {
        this.props.history.push({
            pathname: `/equipment/${item.name}`,
            state: { subcategories: item.subcategories ? item.subcategories : [] }
        })
    }
    render() {
        return (
            <div class="card" style={{ width: "18rem" }} onClick={this.props.item ? () => this.redirect(this.props.item) : () => { }}>
                <img class="card-img-top" src={`${this.props.imagePath}${this.props.item.image}`} alt={this.props.item.name} />
                <div class="card-body">
                    <p class="card-text">{this.props.item.name}</p>
                </div>
            </div >
        )
    }
}

export default withRouter(ImageCard);

