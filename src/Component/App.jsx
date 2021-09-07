import React from 'react';
import 'antd/dist/antd.css';
import '../Styles/bootstrap-grid.css';
import '../Styles/App.scss';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from './Content/NavBar';
import Home from './Page/Home';
import Contact from './Page/Contact';
import Catalogue from './Page/Catalogue';
import Portofolio from './Page/Portofolio';

const App = () => {
    return (
        <div className="App">
            <Router basename="/Landing_P">
                <nav id="navbar">
                    <NavBar/>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/portofolio" component={Portofolio} />
                <Route path="/catalogue" component={Catalogue} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/" />
            </Router>
        </div>
    );
}

export default App;