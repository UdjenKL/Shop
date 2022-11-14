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
            ]
        }
        this.addOrder = this.addOrder.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Items items={this.state.items} onAdd={this.addOrder}/>
                <Footer/>
            </div>
        );
    }
    addOrder(item) {
        this.setState({orders: [...this.state.orders,item]},()=> {
            console.log(this.state.orders);
        })
    }
}

export default App;
