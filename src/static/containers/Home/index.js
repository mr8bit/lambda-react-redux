import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import "./style.sass";
import CardList from "./CardList";
import * as actionCreators from "../../actions/article";

class HomeView extends React.Component {

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        results: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired,
        next: PropTypes.string,
        previous: PropTypes.string,

        actions: PropTypes.shape({
            fetchPosts: PropTypes.func.isRequired,
            getOtherArticle: PropTypes.func.isRequired,
        }).isRequired
    };

    static defaultProps = {
        results: [],
        count: 0,
        next: '',
        previous: ''
    };

    componentWillMount() {
        this.props.actions.fetchPosts();
    }

    getOtherArticle() {
        var prev = this.props.results;
        console.log('get more', this.props.next);
        if (this.props.next) {
            var data = this.props.actions.getOtherArticle(this.props.next);
            console.log(data)
        }
    }

    render() {

        return (            <div className="container">
                <CardList list={this.props.results}/>
                <div className="card__more">
                    <button onClick={this.getOtherArticle.bind(this)}
                            className="btn  btn--small btn--rounded btn--no-border btn--full-width ">
                        <span>ЗАГРУЗИТЬ</span>
                        <span className="icon icon-arrow-right icon-rotate-90 btn__icon-13"></span></button>
                </div>

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

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.posts.results,
        count: state.posts.count,
        next: state.posts.next,
        previous: state.posts.previous,
        isFetching: state.posts.isFetching
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
export {HomeView as HomeViewNotConnected};
