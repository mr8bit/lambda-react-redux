/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { Link } from 'react-router-dom'

export default class CardFull extends Component {
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
                <div className="card card--event--big" style={{backgroundImage: `url(${card.image})`}}>

                    <div className="card-content card-content--event--big">
                        <div className="card-head--event--middle">
            <span className="card-head__tag card-head__tag--middle card-head__tag--transparent ">
				перевод
			</span>
                        </div>
                        <div className="card-footer card-footer--event--middle">
                            <div className="card-footer__datetime card-footer__datetime--big">
                                {card.dateCreate}
                            </div>
                        </div>
                        <div className="card-body card-body--event--middle">
                            <Link to={link} className="card__link">
                                <div className="card-body__title card-body__title--event--big">
                                    {card.title}
                                </div>
                            </Link>
                        </div>

                        <div className="card-footer card-footer--event--middle">
                    <span>
                        <Link to={link} className="btn btn--gray-30 btn--extra-small ">
                            Подробнее
                        </Link>
                    </span>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}