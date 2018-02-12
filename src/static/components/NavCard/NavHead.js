import React from "react";

export default class NavHead extends React.Component{
    render(){
        return(
             <nav className="navigation-head navigation-head--fluid">
                    <div className="navigation-head-container">
                        <div className="navigation-head-container-body navigation-head-container-body--fluid">
                            <h4 className="navigation-head-container__title ">Мероприятия</h4>
                            <div className="navigation-head-container__dropdown">
                                <button className="navigation-head-container__button">
                                    <span className="icon icon-more"></span>
                                </button>
                            </div>

                            <ul className="navigation-head-container-body__menu js-headDropDown">
                                <li className="navigation-head-container-body__menu__item navigation-head-container-body__menu__item--active ">
                                    Все
                                </li>
                                <li className="navigation-head-container-body__menu__item">
                                    MeetUp
                                </li>
                                <li className="navigation-head-container-body__menu__item">
                                    Лекции
                                </li>
                                <li className="navigation-head-container-body__menu__item">
                                    Встречи
                                </li>
                                <li className="navigation-head-container-body__menu__item">
                                    Календарь
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}