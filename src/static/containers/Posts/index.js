import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CardList from "../../components/CardList/CardList";
import * as actionCreators from "../../actions/article";
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';

class PostsView extends React.Component {

    static propTypes = {
        actionsPosts: PropTypes.shape({
            fetchAllArticles: PropTypes.func.isRequired,
            fetchNextAllArticles: PropTypes.func.isRequired,
        }).isRequired,

    };
    state = {
        page: 2
    }
    static defaultProps = {
        results: [],
        count: 0,
        next: '',
        previous: '',
        done: false
    };

    componentDidMount() {
        console.log(this.props.posts.postsList.results)
        this.props.actionsPosts.fetchAllArticles();
    }

    getOtherArticle() {
        var data = this.props.actionsPosts.fetchNextAllArticles(this.state.page);
        this.setState({page: this.state.page + 1});
    }


    render() {
        console.log(this.props.posts.postsList.results)
        return (<div>

                {this.props.posts.postsList.results && this.props.posts.postsList.done
                    ?
                    <div className="container">
                        <CardList list={this.props.posts.postsList.results} loadMore={this.getOtherArticle.bind(this)}/>
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionsPosts: bindActionCreators(actionCreators, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostsView);
export {PostsView as PostsViewNotConnected};
