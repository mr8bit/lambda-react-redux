/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { Link } from 'react-router-dom'

export default class CardMiddle extends Component {
    render() {
        const {card} = this.props;
        const link = `/event/${card.id}`;

        return (
            <ReactCSSTransitionGroup
                transitionName="card"
                transitionAppear={true}
                transitionAppearTimeout={400}
                component="div"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <div className="card card--event--middle">
                    <div className="card-head--event--middle">
			<span className="card-head__tag card-head__tag--middle card-head__tag--transparent ">
				лекции
			</span>
                        <img className="card__img card__img--middle" src={card.image}/>
                    </div>
                    <div className="card-footer card-footer--event--middle">
                        <div className="card-footer__datetime card-footer__datetime--middle">
                            24 Января 15:40
                        </div>
                    </div>
                    <div className="card-body card-body--event--middle">
                        <Link className="card__link" to={link}>
                            <div className="card-body__title card-body__title--event--middle">
                                {card.title}
                            </div>
                        </Link>
                    </div>
                    <div className="card-footer card-footer--event--middle">
            <span>
                <Link to={link} className="card-footer__more">
                Подробнее
                </Link>
            </span>

                    </div>
                </div>

            </ReactCSSTransitionGroup>
        )
    }
}