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

    componentDidMount() {
        setTimeout(function () {
            this.setState({preloadEnd: true});
        }.bind(this), 1000)
        console.log('componentDidMount from App', this.props.location)

    }

    render() {

        const links = [
            {
                name: 'Главная',
                link: '/'
            }, {
                name: 'Войти',
                link: '/login'
            }, {
                name: 'Защищенный протокол',
                link: '/protected'
            },
        ]
        console.log('hello from App', this.props.location)
        return (
            <div className="app">
                <NavCard links={links}/>
                {this.state.preloadEnd ?
                    <ReactCSSTransitionGroup
                        transitionName="animation"
                        transitionAppear={true}
                        transitionAppearTimeout={400}
                        component="div"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        <div className="animation">
                            {this.props.children}
                        </div>
                    </ReactCSSTransitionGroup>
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
                <Footer/>
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
