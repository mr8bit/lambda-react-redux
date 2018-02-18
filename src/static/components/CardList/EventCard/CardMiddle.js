/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";

export default class CardMiddle extends Component {
    render() {
        const {card} = this.props;
        return (
            <div className="card card--event--middle">
                <div className="card-head--event--middle">
			<span className="card-head__tag card-head__tag--middle card-head__tag--transparent ">
				лекции
			</span>
                    <img className="card__img card__img--middle" src="img/card/event_middle.png"/>
                </div>
                <div className="card-footer card-footer--event--middle">
                    <div className="card-footer__datetime card-footer__datetime--middle">
                        24 Января 15:40
                    </div>
                </div>
                <div className="card-body card-body--event--middle">
                    <a className="card__link" href="#">
                        <div className="card-body__title card-body__title--event--middle">
                            Машинное обучение #3 <br/>
                            Методы Оптимизации
                        </div>
                    </a>
                </div>
                <div className="card-footer card-footer--event--middle">
            <span>
                <a href="#" className="card-footer__more">
                Подробнее
                </a>
            </span>

                </div>
            </div>


        )
    }
}