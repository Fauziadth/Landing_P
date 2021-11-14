import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-slideshow-image/dist/styles.css'
import '../Styles/bootstrap-grid.css';
import '../Styles/App.scss';
import NavBar from './Content/NavBar';
import Home from './Page/Home';
import Portofolio from './Page/Portofolio';
import Contact from './Page/Contact';

const App = () => {
    return (
        <div className="App">
            <Router basename="/Landing_P">
                <NavBar/>
                <Route path="/" exact component={Home} />
                <Route path="/portofolio" component={Portofolio} />
                <Route path="/contact" component={Contact} />
            </Router>
        </div>
    );
}

export default App;