/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";
import { Link } from 'react-router-dom'
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
                            <Link className="navigation-breadcrumb-list__item__link" to='/'>Главная</Link>
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


