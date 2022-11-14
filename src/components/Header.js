import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';

function Header(props) {
    let [cartOpen,setCartOpen] = React.useState(false);
    return (
        <header>
            <div>
                <span className="logo">Present Online</span>
                <ul className="navigation">
                    <li>О Нас</li>
                    <li>Фото</li>
                    <li>Кабинет</li>
                </ul>
                <BsFillCartCheckFill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen && 'active'}`}/>
                {
                    cartOpen &&  (
                        <div className="shop-cart">

                        </div>
                    )}
            </div>
            <div className="mainBanner">

            </div>
        </header>
    );
}

export default Header;
