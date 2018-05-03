import React from 'react';
import {connect} from 'react-redux';

class Pizza extends React.Component {

    render() {
        const pizzas = this.props.pizza.map((pizza, i) => {
            return (
                <div className="pizza" key={i}>
                <h3><li>{pizza.title}</li></h3>
                <p><li>{pizza.description}</li></p>
                <h3>{pizza.price}</h3>
                <button onClick={()=>{this.props.addOrder(pizza)}}>Į krepšelį</button>
            </div>
            )
        });
        return (
            <div className="pizza-page">
                <h1>Pizza</h1>
                <div className="pizza-menu">
                    {pizzas}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        pizza:state.pizza,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        addOrder(pizza) {
            dispatch({type:'ADD_PIZZA', payload:pizza})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizza)


// export default connect((state) => ({
//     pizza: state.pizza,
//     drink: state.drink,
// }))(Pizza);
