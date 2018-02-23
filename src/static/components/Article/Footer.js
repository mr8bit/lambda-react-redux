import React from "react";
import "./footer.sass";

export default class Footer extends React.Component {

    componentWillMount() {
         const {tags, author} = this.props;
    }

    render() {
        return (
            <div className="article-footer">
                <div className="article-footer__top">
                    <div className="article-footer-author">
                        <img className="article-footer-author__avatar"/>
                        <div className="article-footer-author__info">
                            <span className="article-footer-author__name">{this.props.author}</span>
                            <span className="article-footer-author__position">Основатель</span>
                        </div>
                    </div>
                    <div className="article-footer-about_article">
                        <div className="article-footer-about_article__item">
                            <a className="article-footer-about_article__link" href="#">
                                <span className="icon icon-faovrite-solid"></span>
                            </a>
                            <span className="article-footer-about_article__num">122</span>
                        </div>
                        <div className="article-footer-about_article__item">
                            <span className="article-footer-about_article__icon icon icon-eye"></span>
                            <span className="article-footer-about_article__num">122</span>
                        </div>

                    </div>
                    <div className="article-footer-go_top">
            <span className="btn btn--ghost btn--default article-footer-go_top__btn">
                <span className="article-footer-go_top__name">Наверх</span>
                <span className="icon icon-arrow-left icon-rotate-90"></span>
            </span>
                    </div>
                </div>
                <div className="article-footer__bottom">
                    <div className="article-footer-tags">
                        <a href="#" className="article-footer-tags__link label label--default">codegasm</a>
                        <a href="#" className="article-footer-tags__link label label--default">code</a>
                        <a href="#" className="article-footer-tags__link label label--default">ML</a>
                        <a href="#" className="article-footer-tags__link label label--default">python</a>
                    </div>
                    <div className="article-footer-share">
                        <span className="article-footer-share__name">Поделиться:</span>
                        <div className="article-footer-share__social">
                            <a href="#" className="article-footer-share__link">
                                <span className="article-footer-share__icon icon icon-twitter"></span>
                            </a>
                            <span className="article-footer-share__num">10</span>
                        </div>
                        <div className="article-footer-share__social">
                            <a href="#" className="article-footer-share__link">
                                <span className="article-footer-share__icon icon icon-vk"></span>
                            </a>
                            <span className="article-footer-share__num">10</span>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
