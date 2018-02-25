/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class Head extends Component {
    render() {
        const {title, image, date, place} = this.props;

        return (
            <div className="event-head" style={{backgroundImage: `url(${image})`}}>
                <div className="event-head-content">
                    <div className="event-head-content-head">
                        <ul className="event-head-content-head__list">
                            <li className="event-head-content-head__list__item"><span
                                className="icon icon-clock  icon--15-right"></span> <span
                                className="event-head-content-head__list__item__text">{date}</span></li>
                            <li className="event-head-content-head__list__item">
                                <span className="icon icon-place icon--15-right"></span>
                                <span className="event-head-content-head__list__item__text"> {place} </span>
                            </li>
                        </ul>
                    </div>
                    <div className="event-head-content-body">
                        <h1 className="event-head-content-body__title">{title}</h1>
                        <a className="btn btn--gray-30 btn--small btn--rounded">Я пойду</a>
                    </div>
                </div>
            </div>


        )
    }
}