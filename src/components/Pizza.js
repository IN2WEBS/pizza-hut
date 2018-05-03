import React from 'react';
import {connect} from 'react-redux';

class Pizza extends React.Component {

    render() {
        const pizzas = this.props.pizza.map((pizza, i)=> {
            return <li  key={i}>{pizza.title}</li>
        });
        return (
            <div>
                Pizza
                {pizzas}
            </div>
        )
    }
}

export default connect((state) => ({pizza:state.pizza}))(Pizza);



// const mapStateToProps = (state)=> {
//     return {
//         pizza:state.pizza,
//     }
// };
//
// export default connect(mapStateToProps)(Pizza)

