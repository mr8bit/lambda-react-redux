import React from "react";

export default class NavHeadWhite extends React.Component {
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

            <nav className="navigation-head ">
                <div className="navigation-head-container navigation-head-container--block">
                    <div className="navigation-head-container-body navigation-head-container-body--block">
                        <h4 className="navigation-head-container__title ">Публикации</h4>
                        <div className="navigation-head-container__dropdown">
                            <button className="navigation-head-container__button">
                                <span className="icon icon-more"></span>
                            </button>
                        </div>

                        <ul className="navigation-head-container-body__menu js-headDropDown">
                           <li key={'all'} onClick={this.sortFilter.bind(this, 'all', 'all')}
                                className={'all' == this.state.activeCategory ? "navigation-head-container-body__menu__item navigation-head-container-body__menu__item--active" : "navigation-head-container-body__menu__item"}>
                                Все
                            </li>
                            {
                                 categoryList.map((item, index) => {
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