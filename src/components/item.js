import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.imgUrl} onClick={() => this.props.onShowItem(this.props.item)}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.text}</p>
                <b>{this.props.item.price}бел.р</b>
                <div className="addToCart" onClick={() => this.props.onAdd(this.props.item)}>Добавить</div>
            </div>
        )
    }
}

export default Item;
