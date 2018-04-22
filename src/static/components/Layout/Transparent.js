import React, {Component} from 'react'
import Footer from '../Footer'
import NavCardTransparent from '../Navigation/NavCardTransparent'
import {BrowserRouter as Router, Route, Link, Match, Redirect, Switch} from 'react-router-dom'


export const TransparentLayout = ({children, ...rest}) => {
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
            <NavCardTransparent links={links}/>
            {children}
            <Footer/>
        </div>
    )
};

export const TransparentRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <TransparentLayout>
                <Component {...matchProps} />
            </TransparentLayout>
        )}/>
    )
};