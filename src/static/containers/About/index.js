import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from "./../../components/Article";
import * as actionArticle from "../../actions/article";
import {bindActionCreators} from "redux";
import NavBreadcrumb from "./../../components/Navigation/NavBreadcrumb";
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import BigHeadTitle from '../../components/Head/BigHeadTitle'
import about_bg  from "./about_bg.png";
class AboutView extends React.Component {

    static propTypes = {
        results: PropTypes.array,
        actionUsers: PropTypes.shape({
            fetchArticle: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        this.props.actionArticle.fetchArticle(this.props.slug);
    }

    render() {
        return (
            <div>
                <BigHeadTitle title={"О нас"} image={about_bg}/>
                <div className="panel panel--big panel--small">
                    <div className="panel__10 panel__about">
                        <div className="panel__text">
                            An advertising agency is a service based business dedicated to creating, planning, and
                            handling advertising
                            for its clients. An ad agency is generally independent from the client and provides an
                            outside point of view
                            to the effort of selling the client's products or services.
                        </div>
                    </div>
                </div>
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
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionArticle: bindActionCreators(actionArticle, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutView);
export {AboutView as AboutViewNotConnected};