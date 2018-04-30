import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import NotFound from "./components/NotFound";
import Header from "./components/Header";


class AppRoutes extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/pizza" component={Pizza} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRoutes;