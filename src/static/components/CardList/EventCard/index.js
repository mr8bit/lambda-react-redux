/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import "../Card/card.sass";
import CardFull from './CardFull'
import CardMiddle from './CardMiddle'

export default class Card extends Component {
    render() {
        const {card} = this.props;
        var render_card;
        switch (card.type) {
            case 'mid': {
                render_card = <CardMiddle card={card}/>
                break;
            }
            case 'big': {
                render_card = <CardFull card={card}/>
            }
        }
        return (
            <div>
                {render_card}
            </div>
        )
    }
}