import React from "react";
import './footer.sass'
export default class Footer extends React.Component {


    render() {
        const {list} = this.props;
        return (
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer-item">
                        <div className="footer-item__logo">
                            <span className="icon icon-logo"></span>
                        </div>
                        <div className="footer-item__policy">
                            Privacy Policy
                        </div>
                        <div className="footer-item__policy">
                            © 2017 Lambda Co.
                        </div>
                    </div>

                    <div className="footer-item">
                        <div className="footer-item__head">Навигация</div>
                        <ul className="footer-item__menu">
                            <li className="footer-item__cell">
                                <a className="footer-item__link" href="#">Главная</a>
                            </li>
                            <li className="footer-item__cell">
                                <a className="footer-item__link" href="#">Публикации</a>
                            </li>
                            <li className="footer-item__cell">
                                <a className="footer-item__link" href="#">Мероприятия</a>
                            </li>
                            <li className="footer-item__cell">
                                <a className="footer-item__link" href="#">Партнеры</a>
                            </li>
                            <li className="footer-item__cell">
                                <a className="footer-item__link" href="#">О нас</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-item">
                        <div className="footer-item__head">Контакты</div>
                        <div className="footer-contacts">
                            <a className="footer-contacts__phone" href="#">8 800 555 35 35</a>
                            <a className="footer-contacts__mail" href="#">info@lambda-it.ru</a>
                        </div>
                        <div className="footer-contacts__border"></div>

                        <div className="footer-social">
                            <ul className="footer-social__list">
                                <li className="footer-social__item">
                                    <a className="footer-social__link" href="#">
                                        <span className="footer-social__icon icon icon-twitter"></span>
                                    </a>
                                </li>
                                <li className="footer-social__item">
                                    <a className="footer-social__link" href="#">
                                        <span className="footer-social__icon icon icon-instagram"></span>
                                    </a>
                                </li>
                                <li className="footer-social__item">
                                    <a className="footer-social__link" href="#">
                                        <span className="footer-social__icon icon icon-vk"></span>
                                    </a>
                                </li>
                                <li className="footer-social__item">
                                    <a className="footer-social__link" href="#">
                                        <span className="footer-social__icon icon icon-github"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )

    }
}