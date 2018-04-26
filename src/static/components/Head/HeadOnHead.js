/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";

export default class HeadOnHead extends Component {

    render() {
        const {title, back_title} = this.props;
        return (
            <div className="head head-word">
                <div className="head__big_word">
                    <div>{back_title}</div>
                </div>

                <div className="head head--big">
                    <h1 className="head__title " dangerouslySetInnerHTML={{__html: title}}>

                    </h1>
                    <div className="head__line"></div>
                </div>
            </div>


        )
    }

}


