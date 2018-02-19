/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";

export default class CardMiddle extends Component {
    render() {
        const {card} = this.props;
        const link =  `/post/${card.slug}`
        return (
            <div className="card card--middle">
                <a href={link} className="card__link">
                    <div className="card-head--middle">
			            <span className="card-head__tag card-head__tag--middle"
                              style={{backgroundColor: card.categoryName.color}}>
                            {card.categoryName.name}
			            </span>
                        <img className="card__img card__img--middle" src={card.image}/>
                    </div>
                    <div className="card-body card-body--middle">
                        <div className="card-body__title card-body__title--middle">
                            {card.title}
                        </div>
                    </div>
                    <div className="card-footer card-footer--middle">
                        <div className="card-footer__datetime card-footer__datetime--middle">
                            {card.dateCreate}
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