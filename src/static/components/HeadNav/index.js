/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";

export default class HeadNav extends Component {
    state = {
        active: false
    }

    toogleClass() {
        console.log('nabvar', this.state.active);
        this.setState({active: !this.state.active});
    }

    render() {
        const {links} = this.props;

        const menuList = this.props.links.map((linkItem, index) =>
            <li key={index} className="navigation-card-sidebar__item  ">
                <a href={linkItem.link} className="navigation-card-sidebar__link">{linkItem.name}</a>
            </li>
        )

        return (
            <nav className="navigation-card">
                <div className="navigation-card__container   ">
                    <div className="navigation-card__left">
                        <div onClick={this.toogleClass.bind(this)} className="navigation-card__sidebar-btn">
                            <span className="icon icon-menu"></span>
                        </div>
                    </div>

                    <div className="navigation-card__center  ">
                        <div className="navigation-card__brand">
                            <span className="icon icon-logo "> </span>
                        </div>
                    </div>

                    <div className="navigation-card__right">
                        <ul className="navigation-card-social__list">
                            <li className="navigation-card-social__item">
                                <a className="navigation-card-social__link" href="#">
                                    <span className="navigation-card-social__icon icon icon-twitter"></span>
                                </a>
                            </li>
                            <li className="navigation-card-social__item">
                                <a className="navigation-card-social__link" href="#">
                                    <span className="navigation-card-social__icon icon icon-instagram"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={ this.state.active ? "navigation-card-sidebar navigation-card-sidebar__view" : "navigation-card-sidebar" }>

                    <ul className="navigation-card-sidebar__list">
                        {menuList}
                    </ul>
                </div>


            </nav>
        )
    }

}


