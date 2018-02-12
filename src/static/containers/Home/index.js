import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import Card from "../../components/Card";
import "./style.sass";
import CardList from './CardList'
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

        return (
            <div className="container">
                    <CardList list={this.props.results}/>
                <div className="card__more">
                    <button onClick={this.getOtherArticle.bind(this)}
                            className="btn  btn--small btn--rounded btn--no-border btn--full-width ">
                        <span>ЗАГРУЗИТЬ</span>
                        <span className="icon icon-arrow-right icon-rotate-90 btn__icon-13"></span></button>
                </div>
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
