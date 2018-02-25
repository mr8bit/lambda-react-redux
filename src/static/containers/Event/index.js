import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from "./../../components/Article";
import * as actionEvent from "../../actions/event";
import {bindActionCreators} from "redux";
import NavBreadcrumb from "./../../components/Navigation/NavBreadcrumb";
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import Event from "./../../components/Event";

class EventView extends React.Component {

    static propTypes = {
        results: PropTypes.array,
        actionEvent: PropTypes.shape({
            fetchEvent: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        this.props.actionEvent.fetchEvent(this.props.slug);
    }

    render() {
        return (<div>
                {this.props.events.activeEvent.post ?
                    <div>
                        <NavBreadcrumb
                            category={this.props.events.activeEvent.post.categoryName.title}
                            nameArticle={this.props.events.activeEvent.post.title}/>
                        <Event event={this.props.events.activeEvent.post}/>
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
        events: state.events,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionEvent: bindActionCreators(actionEvent, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventView);
export {EventView as EventViewNotConnected};