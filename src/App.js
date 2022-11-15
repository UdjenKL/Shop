import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Items from "./components/items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Букет сладость',
                    imgUrl: '1.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '80'
                },
                {
                    id: 2,
                    title: 'Букет сладость2',
                    imgUrl: '2.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '80'
                },
                {
                    id: 3,
                    title: 'Букет сладость3',
                    imgUrl: '3.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '80'
                },
                {
                    id: 4,
                    title: 'Букет сладость',
                    imgUrl: '4.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '80'
                },
                {
                    id: 5,
                    title: 'Букет сладость2',
                    imgUrl: '6.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '80'
                },
                {
                    id: 7,
                    title: 'Букет сладость3',
                    imgUrl: '7.jpg',
                    text: 'lorem ipsum',
                    category: 'presents',
                    price: '80'
                },
            ]
        }
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Items items={this.state.items} onAdd={this.addOrder}/>
                <Footer/>
            </div>
        );
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
