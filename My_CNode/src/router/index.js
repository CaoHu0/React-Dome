import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../view/index/index";
import Book from "../view/book/index";
import Details from "../view/details/index";
import User from "../view/user/user";
import About from "../view/about/index";

class RouterIndex extends Component {
    render () {
        return (
            <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to="/index/all" />
                )} />
                <Route path="/index/:id" component = {Index}/>
                <Route path="/book" component = {Book}/>
                <Route path="/details" component = {Details}/>
                <Route path="/user" component = {User}/>
                <Route path="/about" component = {About}/>
            </Switch>
        )
    }
}

export default RouterIndex;