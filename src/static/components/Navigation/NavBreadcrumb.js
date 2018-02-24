/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";

export default class NavBreadcrumb extends Component {
    state = {
        active: false
    }


    render() {
        const {category, nameArticle} = this.props;
        return (
            <div className="container">
                <nav className="navigation-breadcrumb">
                    <ol className="navigation-breadcrumb-list">
                        <li className="navigation-breadcrumb-list__item">
                            <a className="navigation-breadcrumb-list__item__link" href="/">Главная</a>
                        </li>
                        <li className="navigation-breadcrumb-list__item">
                            <a className="navigation-breadcrumb-list__item__link" href="#">{category}</a>
                        </li>
                        <li className="navigation-breadcrumb-list__item">{nameArticle}</li>
                    </ol>
                </nav>
            </div>
        )
    }

}


