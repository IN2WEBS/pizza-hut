import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import './sass/main.scss';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
// import me from './playground/default-exports';
// import {food, getInfo} from './playground/named-exports';
// import {food as maistas} from './playground/named-exports';
// import * as all  from './playground/named-exports';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
