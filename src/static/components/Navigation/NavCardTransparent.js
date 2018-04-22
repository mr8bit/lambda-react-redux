/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";
import { Link } from 'react-router-dom'

export default class NavCardTransparent extends Component {
    state = {
        active: false
    }

    toogleClass() {
        this.setState({active: !this.state.active});
    }

    render() {
        const {links} = this.props;

        const menuList = links.map((linkItem, index) =>
            <li key={index} className="navigation-card-sidebar__item  ">
                <Link to={linkItem.link} onClick={this.toogleClass.bind(this)} className="navigation-card-sidebar__link">{linkItem.name}</Link>
            </li>
        )

        return (

            <nav className="navigation-card navigation-card--transparent">
                 <div className="navigation-card__container   ">
                     <div className="navigation-card__left">

                        <div onClick={this.toogleClass.bind(this)}
                            className="navigation-card__sidebar-btn js-toogleSidebar navigation-card__sidebar-btn--transparent">
                            <span className="icon icon-menu"></span>
                        </div>

                    </div>

                     <div className="navigation-card__center  ">
                         <div className="navigation-card__brand navigation-card__brand--white">
                            <span className="icon icon-logo "> </span>
                        </div>
                    </div>

                     <div className="navigation-card__right    ">
                        <ul className="navigation-card-social__list">
                            <li className="navigation-card-social__item">
                                <a className="navigation-card-social__link navigation-card-social__link--white" href="#">
                                    <span className="navigation-card-social__icon icon icon-twitter"></span>
                                </a>
                            </li>
                            <li className="navigation-card-social__item">
                                <a className="navigation-card-social__link navigation-card-social__link--white" href="#">
                                    <span className="navigation-card-social__icon icon icon-instagram"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={ this.state.active ? "navigation-card-sidebar navigation-card-sidebar__view" : "navigation-card-sidebar" }>
                    <ul className="navigation-card-sidebar__list">
                        {menuList}
                    </ul>
                </div>
            </nav>

        )
    }

}


