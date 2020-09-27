import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'
import Home from '../components/Home/Home';
import CountryDetail from '../components/CountryDetail/CountryDetail';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Routers = () => {
    return(
        <Router>
            <div>
                <NavigationBar/>
            </div>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/* route to specific country */}
                <Route path="/:CountryID"  component={CountryDetail}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}
export default Routers;