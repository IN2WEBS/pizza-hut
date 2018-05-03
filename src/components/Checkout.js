import React from 'react';
import {connect} from 'react-redux';

class Checkout extends React.Component {

    render() {
        const orders = this.props.orders.map((order, i)=>{
            return <li key={i}>{order.title} {order.price}€</li>
        });
        return (
            <div className="pizza-page">
                <h1>Checkout</h1>
                <ul>{orders}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders,
    }
};

export default connect(mapStateToProps)(Checkout)