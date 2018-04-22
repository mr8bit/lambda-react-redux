import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from "./../../components/Article";
import * as actionArticle from "../../actions/article";
import {bindActionCreators} from "redux";
import NavBreadcrumb from "./../../components/Navigation/NavBreadcrumb";
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';

class ArticleView extends React.Component {

    static propTypes = {
        results: PropTypes.array,
        actionArticle: PropTypes.shape({
            fetchArticle: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        this.props.actionArticle.fetchArticle(this.props.slug);
    }

    render() {
        return (<div>
                {this.props.posts.activePost.post ?
                    <div>
                        <NavBreadcrumb
                            nameArticle={this.props.posts.activePost.post.title}
                            category={this.props.posts.activePost.post.categoryName.name}/>
                        <Article content={this.props.posts.activePost.post}/>
                    </div>
                    :
                    <div className='preloader'>
                        <PreloaderIcon
                            type={ICON_TYPE.PUFF}
                            size={60}
                            strokeWidth={8}
                            strokeColor="#4d4d4d"
                            duration={800}
                        />
                    </div>
                }

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