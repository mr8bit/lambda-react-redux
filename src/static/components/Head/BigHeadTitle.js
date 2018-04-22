/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";

export default class BigHeadTitle extends Component {

    render() {
        const {title, image} = this.props;
        return (
            <div className="navigation-big navigation-big--letter" style={{backgroundImage: `url(${image})`}}
                 >
                <div className="navigation-big-content">
                    <div className="navigation-big-content__head">

                    </div>
                    <div className="navigation-big-content__body">
                        <div className="head head--big">
                            <h1 className="head__title head__title--white">
                                {title}
                            </h1>
                            <div className="head__line"></div>
                        </div>
                    </div>

                </div>


            </div>


        )
    }

}


