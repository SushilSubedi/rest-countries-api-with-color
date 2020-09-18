import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'
import Home from '../components/Home/Home';
import CountryDetail from '../components/CountryDetail/CountryDetail';

const Routers = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Country" exact component={CountryDetail}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
export default Routers;