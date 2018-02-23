import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import "./style.sass";
import CardList from "../../components/CardList/CardList";
import EventList from "../../components/CardList/EventList";
import * as actionCreators from "../../actions/Article/index";
import * as actionEventCategory from "../../actions/event/category";
import * as actionEvent from "../../actions/event";
import NavHead from '../../components/NavCard/NavHead'

class HomeView extends React.Component {

    static propTypes = {
        results: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired,
        next: PropTypes.string,
        previous: PropTypes.string,

        actionsPosts: PropTypes.shape({
            fetchArticles: PropTypes.func.isRequired,
            fetchNextArticles: PropTypes.func.isRequired,
        }).isRequired,

        actionEventCategory: PropTypes.shape({
            fetchEventCategory: PropTypes.func.isRequired,
        }),
        actionEvent: PropTypes.shape({
            filterEventByCategory: PropTypes.func.isRequired,
            loadMoreEvents: PropTypes.func.isRequired,
            fetchEvents: PropTypes.func.isRequired
        })

    };

    static defaultProps = {
        results: [],
        count: 0,
        next: '',
        previous: ''
    };

    componentWillMount() {
        this.props.actionsPosts.fetchArticles();
        this.props.actionEventCategory.fetchEventCategory();
    }

    getOtherArticle() {
         console.log('get more', this.props.posts.postsList.next);
        if (this.props.posts.postsList.next) {
            var data = this.props.actionsPosts.fetchNextArticles(this.props.posts.postsList.next);
            console.log(data)
        }
    }

    updateEventByFilter(categoryId) {
        console.log('update by filter  ', categoryId);
        this.props.actionEvent.filterEventByCategory(categoryId);

    }

    render() {
         return (<div className="container">
                <CardList list={this.props.posts.postsList.results} nextUrl={this.props.posts.postsList.next} loadMore={this.getOtherArticle.bind(this)}/>
                <NavHead categoryList={this.props.category.results}
                         getEventbyFilter={this.updateEventByFilter.bind(this)}/>
                <EventList list={this.props.events.results}  ></EventList>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        category: state.category,
        events: state.events
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionsPosts: bindActionCreators(actionCreators, dispatch),
        actionEventCategory: bindActionCreators(actionEventCategory, dispatch),
        actionEvent: bindActionCreators(actionEvent, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
export {HomeView as HomeViewNotConnected};
