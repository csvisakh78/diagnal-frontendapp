import * as React from 'react';
import {  Route, Switch } from 'react-router-dom';
import ListingPage from '../components/ListingPage/ListingPage.component';
import NotFound from '../components/NotFound/NotFound.component';

export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/diagnal-frontendapp" component={ListingPage} exact /> 
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}