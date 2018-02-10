import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import Card from "../../components/Card";
import "./style.sass";

import * as actionCreators from "../../actions/article";

class HomeView extends React.Component {

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array,
        actions: PropTypes.shape({
            fetchPosts: PropTypes.func.isRequired
        }).isRequired
    };

    static defaultProps = {
        data: []
    };

    componentWillMount() {
        this.props.actions.fetchPosts();
    }


    render() {
        console.log(this.props.isFetching)
        return (
            <div className="container">
                {this.props.isFetching === true ? <p className="text-center">Loading data...</p>
                    :
                    <Card card={this.props.data}/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.posts.data,
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
