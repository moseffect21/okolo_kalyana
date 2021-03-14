import React from 'react'
import Example from './components/Example'
import Example2 from './components/Example2'
import {Switch, NavLink, Route} from 'react-router-dom'


const AppView = () => {
    return (
        <div>
            <Switch>
                <Route path="/first">
                    <Example />
                    <NavLink to="/second">To second</NavLink>
                </Route>
                <Route path="/second">
                    <Example2 />
                    <NavLink to="/first">To first</NavLink>
                </Route>
            </Switch>
        </div>
    );
}

export default AppView