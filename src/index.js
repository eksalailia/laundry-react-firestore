import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Layanan from './components/Layanan';
import FormOrder from './components/FormOrder';
import Order from './components/Order';
// import CustomerCare from './frontend/CustomerCare';
// import Cart from './frontend/Cart';
import About from './frontend/About';
import Home from './frontend/Home';
import ShowOrder from './components/ShowOrder';
import EditOrder from './components/EditOrder';
import DataAdmin from './components/DataAdmin';
import Admin from './components/Admin';
import Nav from './components/Nav';
import ShowAdmin from './components/ShowAdmin';
import EditAdmin from './components/EditAdmin';
import Dashboard from './components/Dashboard';
import index from './components/index';
import Contact from './frontend/Contact';
import Saran from './components/Saran';
import ShowSaran from './components/ShowSaran';
import FormSaran from './components/FormSaran';
import EditSaran from './components/EditSaran';
import Login from './components/Login';
import Registrasi from './components/Registrasi';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/login' component={Login} />
            <Route path='/registrasi' component={Registrasi} />
            <Route exact path='/' component={App} />
            <Route path='/layanan' component={Layanan} />
            <Route path='/home' component={App} />
            <Route path='/nav' component={Nav} />
            <Route path='/dashboard' component={index} />
            <Route path='/formorder' component={FormOrder} />
            <Route path='/order' component={Order} />
            <Route path='/admin' component={Admin} />
            <Route path='/dataadmin' component={DataAdmin} />
            <Route path='/about' component={About} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/editorder/:id' component={EditOrder} />
            <Route path='/editadmin/:id' component={EditAdmin} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
            <Route path='/contact' component={Contact} />
            <Route path='/showadmin/:id' component={ShowAdmin} />
            <Route path='/showorder/:id' component={ShowOrder} />
            <Route path='/showsaran/:id' component={ShowSaran} />
            <Route path='/editsaran/:id' component={EditSaran} />
            <Route path='/formsaran' component={FormSaran} />
            <Route path='/kritiksaran' component={Saran} />
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();