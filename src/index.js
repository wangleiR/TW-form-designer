import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducer } from './web/Reducer';

import { Route,Switch,Link, BrowserRouter } from 'react-router-dom'
import Preview from './web/Preview';
import OpenDialog from './web/OpenDialog';


let store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// router
// const Header = () => (
//     <header>
//         <nav>
//             <ul>
//                 <li><Link to='/'>Preview</Link></li>
//                 <li><Link to='/roster'>OpenDialog</Link></li>
//                 <li><Link to='/schedule'>Schedule</Link></li>
//             </ul>
//         </nav>
//     </header>
// );
//
// const Schedule = () => (<div>Schedule</div>);
//
// const Main = () => (
//     <main>
//         <Switch>
//             <Route exact path='/' component.js={Preview}/>
//             <Route path='/roster' component.js={OpenDialog}/>
//             <Route path='/schedule' component.js={Schedule}/>
//         </Switch>
//     </main>
// );
//
// ReactDOM.render((
//     <Provider store={store}>
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Main />
//         </div>
//     </BrowserRouter>
//     </Provider>
// ), document.getElementById('root'));