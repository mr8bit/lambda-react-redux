import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer'
import {authLogoutAndRedirect} from '../../actions/auth';

class BaseTransparent extends React.Component {
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
        console.log('componentWillMount from Base', this.props.location)

    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({preloadEnd: true});
        }.bind(this), 1000)
        console.log('componentDidMount from base', this.props.location)

    }

    render() {

        const links = [
            {
                name: 'Главная',
                link: '/'
            }, {
                name: 'Публикации',
                link: '/posts'
            }, {
                name: 'Мероприятия',
                link: '/events'
            }, {
                name: 'Войти',
                link: '/login'
            }, {
                name: 'Защищенный протокол',
                link: '/protected'
            },
        ]

        return (
            <div className="app">
               {this.props.children}
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default connect(mapStateToProps)(BaseTransparent);
export {BaseTransparent as BaseTransparentConnected};
