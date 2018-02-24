import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import "./style.sass";
import CardList from "../../components/CardList/CardList";
import EventList from "../../components/CardList/EventList";
import * as actionCreators from "../../actions/Article/index";
import * as actionEvent from "../../actions/event";
import NavHead from '../../components/Navigation/NavHead'

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
        actionEvent: PropTypes.shape({
            filterEventByCategory: PropTypes.func.isRequired,
            loadMoreEvents: PropTypes.func.isRequired,
            fetchEvents: PropTypes.func.isRequired,
            fetchEventCategory: PropTypes.func.isRequired
        })

    };

    static defaultProps = {
        results: [],
        count: 0,
        next: '',
        previous: ''
    };

    componentDidMount() {
        this.props.actionsPosts.fetchArticles();
        this.props.actionEvent.fetchEventCategory();
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

    getOtherEvent() {
        console.log('get more event ', this.props.events.eventList.next);
        if (this.props.events.eventList.next) {
            var data = this.props.actionEvent.loadMoreEvents(this.props.events.eventList.next);
            console.log(data)
        }
    }

    render() {
        return (<div>

                {this.props.posts.postsList.results
                && this.props.events.eventList.results &&
                this.props.events.eventCategoryList.results
                    ?
                    <div className="container">
                        <CardList list={this.props.posts.postsList.results} loadMore={this.getOtherArticle.bind(this)}/>
                        <NavHead categoryList={this.props.events.eventCategoryList.results}
                                 getEventbyFilter={this.updateEventByFilter.bind(this)}/>
                        <EventList list={this.props.events.eventList.results}
                                   loadMore={this.getOtherEvent.bind(this)}></EventList>
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
        events: state.events
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionsPosts: bindActionCreators(actionCreators, dispatch),
        actionEvent: bindActionCreators(actionEvent, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
export {HomeView as HomeViewNotConnected};
