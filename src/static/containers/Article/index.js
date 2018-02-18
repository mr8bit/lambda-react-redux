import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from './../../components/Article'
class ArticleView extends React.Component {


    componentWillMount() {
    }

    render() {
        return (
            <Article/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {...state.resource, slug: ownProps.match.params.slug}
}
export default connect(mapStateToProps)(ArticleView);
export {ArticleView as ArticleViewNotConnected};