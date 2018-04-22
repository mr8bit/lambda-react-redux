/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { Link } from 'react-router-dom'

export default class CardMain extends Component {
    render() {
        const {card} = this.props;
        const link = `/post/${card.id}`

        return (<ReactCSSTransitionGroup
                transitionName="card"
                transitionAppear={true}
                transitionAppearTimeout={400}
                component="div"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <div className="card card--main">
                    <div className="card-content card-content--main">
                        <Link to={`/post/${card.id}`} className="card__link">
                            <img src={card.image} className="img-responsive"/>
                        </Link>
                    </div>
                    <div className="card-content card-content--main">
                        <div className="card-head--main ">
                            <span className="card-head__tag card-head__tag--main"
                                  style={{backgroundColor: card.categoryName.color}}>
                                {card.categoryName.name} </span>
                        </div>
                        <div className="card-body">
                            <Link to={`/post/${card.id}`}className="card__link">
                                <div className="card-body__title card-body__title--main">
                                    {card.title}
                                </div>
                            </Link>
                            <div className="card-body__description">
                                {card.short_description}
                            </div>
                        </div>
                        <div className="card-footer card-footer--main">
                            <div className="card-footer__datetime card-footer__datetime--main">
                                {card.dateCreate}
                            </div>
                            <div className="card-footer__countcomment card-footer__countcomment--main">
                                <span className="card-footer__icon  icon icon-comment"></span>
                                <span className="card-footer__countcomment__number">12</span>
                            </div>
                        </div>
                    </div>
                </div>

            </ReactCSSTransitionGroup>
        )
    }
}