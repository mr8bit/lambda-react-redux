import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import NavCard from './components/Navigation/NavCard'
import Footer from './components/Footer'
import {authLogoutAndRedirect} from './actions/auth';
import './styles/main.sass';
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class App extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static defaultProps = {
        location: undefined
    };

    state = {
        preloadEnd: false
    }

    logout = () => {
        this.props.dispatch(authLogoutAndRedirect());
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    goToLogin = () => {
        this.props.dispatch(push('/login'));
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    componentWillMount() {
        console.log('componentWillMount from App', this.props.location)

    }

    render() {

       
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default connect(mapStateToProps)(App);
export {App as AppNotConnected};
