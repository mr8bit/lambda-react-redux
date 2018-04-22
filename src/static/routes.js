import React from 'react';
import {BrowserRouter as Router, Route, Link, Match, Redirect, Switch} from 'react-router-dom'
import {
    HomeView,
    LoginView,
    ProtectedView,
    NotFoundView,
    ArticleView,
    EventView,
    PostsView,
    EventsView,
    AboutView
} from './containers';
import {DefaultRoute} from './components/Layout/Default'
import {TransparentRoute} from './components/Layout/Transparent'


export default (
    <Switch>
        <DefaultRoute exact path="/" component={HomeView}/>
        <DefaultRoute path='/events' component={EventsView}/>
        <DefaultRoute path='/event/:slug' component={EventView}/>
        <DefaultRoute path='/login' component={LoginView}/>
        <DefaultRoute path='/posts' component={PostsView}/>
        <DefaultRoute path='/post/:slug' component={ArticleView}/>

        <TransparentRoute path='/about' component={AboutView} />
    </Switch>
);