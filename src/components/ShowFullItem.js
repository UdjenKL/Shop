import React, {Component} from 'react'


export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <img src={"./img/" + this.props.item.imgUrl}
                         onClick={() => this.props.onShowItem(this.props.item)}/>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.text}</p>
                    <b>{this.props.item.price}бел.р</b>
                    <div className="addToCart" onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        );
    };
}

export default ShowFullItem

