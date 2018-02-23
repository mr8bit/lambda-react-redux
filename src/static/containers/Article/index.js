import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from "./../../components/Article";
import * as actionArticle from "../../actions/Article";
import {bindActionCreators} from "redux";


class ArticleView extends React.Component {

    static propTypes = {
        results: PropTypes.array,
        actionArticle: PropTypes.shape({
            fetchArticle: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentWillMount() {
        this.props.actionArticle.fetchArticle(this.props.slug);
    }

    render() {
        return (<div>
                {this.props.posts.activePost.post && <Article content={this.props.posts.activePost.post}/>}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.resource,
        slug: ownProps.match.params.slug,
        posts: state.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionArticle: bindActionCreators(actionArticle, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
export {ArticleView as ArticleViewNotConnected};