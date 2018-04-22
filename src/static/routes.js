import React from 'react';
import {Route, Switch} from 'react-router';
import {HomeView, LoginView, ProtectedView, NotFoundView, ArticleView, EventView, PostsView, EventsView} from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default (
    <Switch>
        <Route exact path="/" component={HomeView}/>
        <Route path='/post/:slug' component={ArticleView}/>
        <Route path='/posts' component={PostsView}/>
        <Route path='/events' component={EventsView}/>
        <Route path='/event/:slug' component={EventView}/>
        <Route path="/login" component={LoginView}/>
        <Route path="/protected" component={requireAuthentication(ProtectedView)}/>
        <Route path="*" component={NotFoundView}/>
    </Switch>
);
