/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import "./card.sass";

export default class Card extends Component {
    render() {
        const {card}= this.props;
        console.log(card);
        return (
            <div className="card card--middle">
                <a href="#" className="card__link">
                    <div className="card-head--middle">
			            <span className="card-head__tag card-head__tag--middle">
				            новости
			            </span>
                        <img className="card__img card__img--middle" src={card}/>
                    </div>
                    <div className="card-body card-body--middle">
                        <div className="card-body__title card-body__title--middle">
                            Отчёт о Sberbank Data Science Day
                        </div>
                    </div>
                    <div className="card-footer card-footer--middle">
                        <div className="card-footer__datetime card-footer__datetime--middle">
                            24 Янв. 15:40
                        </div>
                        <div className="card-footer__countcomment card-footer__countcomment--middle">
                            <span className="card-footer__icon  icon icon-comment"></span>
                            <span className="card-footer__countcomment__number">12</span>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}