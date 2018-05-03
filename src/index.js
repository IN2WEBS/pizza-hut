import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import './sass/main.scss';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import pizzaReducer from './reducers/pizzaReducer';

const rootReducer = combineReducers({
    pizza:pizzaReducer
});


const store = createStore(rootReducer);

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
