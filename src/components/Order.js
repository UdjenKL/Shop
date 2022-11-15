import React, {Component} from "react";
import {FaTrash} from 'react-icons/fa';

export class Order extends Component {
    render() {
        return (
            <div className="item">
                 <img src={"./img/" + this.props.item.imgUrl}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.text}</p>
                <b>{this.props.item.price}бел.р</b>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order
