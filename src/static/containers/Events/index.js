import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import EventList from "../../components/CardList/EventList";
import * as actionEvent from "../../actions/event";
import NavHeadWhite from '../../components/Navigation/NavHeadWhite'
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';

class EventsView extends React.Component {

    static propTypes = {
        results: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired,
        next: PropTypes.string,
        previous: PropTypes.string,

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
        this.props.actionEvent.fetchEventCategory();
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
        console.log(this.props.events.eventList.results);
        return (<div>

                {this.props.events.eventList.results && this.props.events.eventCategoryList.results
                    ?
                    <div className="container">
                        <NavHeadWhite categoryList={this.props.events.eventCategoryList.results}
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
        events: state.events
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionEvent: bindActionCreators(actionEvent, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventsView);
export {EventsView as HomeViewNotConnected};
