import React from "react";

export default class NavHead extends React.Component {
    state = {
        mobileShowMenu: false,
        activeCategory: 'all'
    }

    toogleShow = () => {
        this.setState({mobileShowMenu: !this.state.mobileShowMenu})
    }

    sortFilter = (index, value, e) => {
        console.log(value, e);
        this.setState({activeCategory: index});
        this.props.getEventbyFilter(value);
    }

    componentWillMount() {
        this.props.getEventbyFilter(this.state.activeCategory);
    }

    render() {
        const {categoryList} = this.props;
        return (
            <nav className="navigation-head navigation-head--fluid">
                <div className="navigation-head-container">
                    <div className="navigation-head-container-body navigation-head-container-body--fluid">
                        <h4 className="navigation-head-container__title ">Мероприятия</h4>
                        <div className="navigation-head-container__dropdown">
                            <button onClick={this.toogleShow.bind(this)}
                                    className="navigation-head-container__button">
                                <span className="icon icon-more"></span>
                            </button>
                        </div>

                        <ul className={this.state.mobileShowMenu ? "navigation-head-container-body__menu navigation-head-container-body__menu--view" : "navigation-head-container-body__menu "}>
                            <li key={'all'} onClick={this.sortFilter.bind(this, 'all', 'all')}
                                className={'all' == this.state.activeCategory ? "navigation-head-container-body__menu__item navigation-head-container-body__menu__item--active" : "navigation-head-container-body__menu__item"}>
                                Все
                            </li>
                            {
                                categoryList && categoryList.map((item, index) => {
                                        return (
                                            <li key={item.id} onClick={this.sortFilter.bind(this, index, item.id)}
                                                className={index == this.state.activeCategory ? "navigation-head-container-body__menu__item navigation-head-container-body__menu__item--active" : "navigation-head-container-body__menu__item"}>
                                                {item.title}
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}