import React, {Component} from 'react'
import Footer from '../Footer'
import NavCard from '../Navigation/NavCard'
import {BrowserRouter as Router, Route, Link, Match, Redirect, Switch} from 'react-router-dom'


export const DefaultLayout = ({children, ...rest}) => {
    const links = [
        {
            name: 'Главная',
            link: '/'
        }, {
            name: 'Публикации',
            link: '/posts'
        }, {
            name: 'Мероприятия',
            link: '/events'
        }, {
            name: 'О нас',
            link: '/about'
        }, {
            name: 'Войти',
            link: '/login'
        }, {
            name: 'Защищенный протокол',
            link: '/protected'
        },
    ]
    return (
        <div>
            <NavCard links={links}/>
            {children}
            <Footer/>
        </div>
    )
};

export const DefaultRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <DefaultLayout>
                <Component {...matchProps} />
            </DefaultLayout>
        )}/>
    )
};