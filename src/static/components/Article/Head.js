import React from "react";
import './head.sass'
export default class Head extends React.Component {
    render() {
        const {title, image, date} = this.props;
        return (
            <div className="article-header-card" style={{backgroundImage: `url(${image})`}}>
                <div className="article-header-card-content">
                    <div className="article-header-card-content-left">
                        <div className="article-header-card-content-left-body">
                            <div className="article-header-card-content-left-body-head">
                                <span className="label label--danger label--large">Новости</span>
                                <span className="article-header-card-content-left-body-head_date">{date}</span>
                            </div>
                            <h1 className="article-header-card-content-left-body__title">
                                {title}
                            </h1>
                            <div className="article-header-card-content-left-body__line"></div>
                        </div>
                        <div className="article-header-card-content-left-footer">
                <span className="article-header-card-content-left-footer-info">
                    <span className="article-header-card-content-left-footer-info__icon icon icon-eye"></span>
                    <span className="article-header-card-content-left-footer-info__title">275</span>
                </span>
                            <span className="article-header-card-content-left-footer-info">
                    <span className="article-header-card-content-left-footer-info__icon icon icon-comment"></span>
                    <span className="article-header-card-content-left-footer-info__title">12</span>

                </span>
                            <span className="article-header-card-content-left-footer-info">
                    <span className="article-header-card-content-left-footer-info__icon icon icon-user"></span>
                    <span className="article-header-card-content-left-footer-info__title">Тимур Майзенберг</span>
                </span>
                        </div>
                    </div>

                    <div className="article-header-card-content-right">
                        <div className="article-header-card-content-right-info">
                            <a className="btn btn--circle btn--gray-30"><span className="icon icon-share icon-flip"></span></a>
                            <span className="article-header-card-content-right-info__num">123</span>
                        </div>
                        <div className="article-header-card-content-right-info">
                            <a className="btn btn--circle btn--gray-30"><span className="icon icon-favorite"></span></a>
                            <span className="article-header-card-content-right-info__num">123</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
