import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import './sass/main.scss';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import pizzaReducer from './reducers/pizzaReducer';
import drinksReducer from './reducers/drinksReducer';
import ordersReducer from "./reducers/orderReducer";

import {createStore, combineReducers, compose} from 'redux';


const enhancers = compose(
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

const rootReducer = combineReducers({
    pizza:pizzaReducer,
    drinks:drinksReducer,
    orders:ordersReducer,

});



const store = createStore(rootReducer, enhancers);

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


// import me from './playground/default-exports';
// import {food, getInfo} from './playground/named-exports';
// import {food as maistas} from './playground/named-exports';
// import * as all  from './playground/named-exports';
