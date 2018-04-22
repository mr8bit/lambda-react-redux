/**
 * Created by lambada on 09.02.18.
 */
import React, {Component} from "react";
import "./card.sass";
import CardMiddle from './middle'
import CardBig from './big'
import CardMain from "./Main";

export default class Card extends Component {
    render() {
        const {card} = this.props;
        var render_card;
        if (card.type === 'mid') {
            render_card = <CardMiddle card={card}/>
        }
        else {
            if (card.type === 'big' | card.type === 'main') {
                render_card = <CardBig card={card}/>
            }
        }
        return (
            <div>
                {render_card}
            </div>
        )
    }
}