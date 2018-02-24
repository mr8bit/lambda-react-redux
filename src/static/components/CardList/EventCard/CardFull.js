/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class CardFull extends Component {
    render() {
        const {card} = this.props;
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
                            <a href="#" className="card__link">
                                <div className="card-body__title card-body__title--event--big">
                                    {card.title}
                                </div>
                            </a>
                        </div>

                        <div className="card-footer card-footer--event--middle">
                    <span>
                        <a href="#" className="btn btn--gray-30 btn--extra-small ">
                            Подробнее
                        </a>
                    </span>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}