import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs';
import Order from "./Order";


const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(element => summa += Number.parseFloat(element.price))
    return (<div>
        {props.orders.map(element => (
            <Order onDelete={props.onDelete} key={element.id} item={element}/>
        ))}
        <p className='summa'>Сумма: {summa}</p>
    </div>)
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}

function Header(props) {
    let [cartOpen, setCartOpen] = React.useState(false);
    return (
        <header>
            <div>
                <span className="logo">+375295023044</span> <br/>
                <ul className="navigation">
                    <li>О Нас</li>
                    <li>Фото</li>
                    <li>Кабинет</li>
                </ul>
                <BsFillCartCheckFill onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                     className={`cart-button ${cartOpen && 'active'}`}/>
                {
                    cartOpen && (
                        <div className="shop-cart">
                            {props.orders.length > 0 ? showOrders(props) : showNothing()}
                        </div>
                    )}
            </div>
            <div className="mainBanner">

            </div>
        </header>
    );
}

export default Header;
