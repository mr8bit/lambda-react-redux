/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import Head from './Head'
import Body from './Body'
import './event.sass'

export default class Event extends Component {
    render() {
        const {event} = this.props;
        return (
            <div className="container">
                <Head image={event.image} title={event.title} date={event.dateCreate} place={event.place}/>
                <Body text={event.description} time={event.timeEvent} internet={event.internet_available}
                      computer={event.take_computer}/>
            </div>
        )
    }
}