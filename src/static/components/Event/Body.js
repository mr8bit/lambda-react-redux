/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class Body extends Component {
    render() {
        const {text, time,internet,computer} = this.props;

        return (
            <div>
                <div className="event-panel event-panel--main">
                    <div className="event-panel-head">
                        <div className="event-panel-head__title">
                            Описание
                        </div>
                    </div>
                    <div className="event-panel-body" dangerouslySetInnerHTML={{__html: text}}>
                    </div>
                </div>
                <div className="event-panel event-panel--sidebar">
                    <div className="event-panel-head">
                        <div className="event-panel-head__title">
                            Информация
                        </div>
                    </div>
                    <div className="event-panel-body event-panel-body--side-bar">
                        <ul className="event-panel-body__list">
                            <li className="event-panel-body__list__item ">
                                <span
                                    className="event-panel-body__list__item__icon icon icon-clock-solid icon--15-right"></span>
                                <span>{time}</span>
                            </li>
                            <li className="event-panel-body__list__item">
                                <span
                                    className="event-panel-body__list__item__icon icon icon-wifi icon--15-right"></span>
                                <span>{internet}</span>
                            </li>
                            <li className="event-panel-body__list__item">
                                <span
                                    className="event-panel-body__list__item__icon icon icon-notebook icon--15-right"></span>
                                <span>{computer}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        )
    }
}