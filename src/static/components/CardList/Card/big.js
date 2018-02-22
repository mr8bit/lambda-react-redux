/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";

export default class CardBig extends Component {
    render() {
        const {card} = this.props;
        const link = `/post/${card.id}`;
        return (
            <div className="card card--big" style={{backgroundImage: `url(${card.image})`}}>
                <a href={link} className="card__link">
                    <div className="card-content">
                        <div className="card-head--big">
                                <span className="card-head__tag card-head__tag--big "
                                      style={{backgroundColor: card.categoryName.color}}>
                            {card.categoryName.name} </span>
                        </div>
                        <div className="card-body card-body--big">
                            <div className="card-body__title card-body__title--big">
                                {card.title}
                            </div>
                        </div>
                        <div className="card-footer card-footer--big">
                            <div className="card-footer__datetime card-footer__datetime--big">
                                {card.dateCreate}
                            </div>
                            <div className="card-footer__countcomment card-footer__countcomment--big">
                                <span className="card-footer__icon card-footer__icon--white icon icon-comment"></span>
                                <span className="card-footer__countcomment__number">12</span>
                            </div>
                            <div className="card-footer__author">
                                Тимур Майзенберг
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}