import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/items";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Букет 1',
                    imgUrl: '1.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '100 '
                },
                {
                    id: 2,
                    title: 'Букет 2',
                    imgUrl: '2.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '100 '
                },
                {
                    id: 3,
                    title: 'Букет 3',
                    imgUrl: '3.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '100 '
                },
                {
                    id: 4,
                    title: 'Букет 4',
                    imgUrl: '4.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '100 '
                },
                {
                    id: 5,
                    title: 'Букет 5',
                    imgUrl: '6.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '100 '
                },
                {
                    id: 7,
                    title: 'Букет 6',
                    imgUrl: '7.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '100 '
                },
            ],
            showFullItem: false
        }
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
            <div className="App">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addOrder}/>
                {this.state.showFullItem && <ShowFullItem onAdd={this.addOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    deleteOrder(id) {
        console.log(id);
        this.setState({orders:this.state.orders.filter(element => element.id !== id)})
    }

    addOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(element => {
            if (element.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]}, () => {
                console.log(this.state.orders);
            })
    }
}

export default App;
