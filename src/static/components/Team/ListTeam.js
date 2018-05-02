import React from "react";
import User from "./Users/index";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class ListTeam extends React.Component {


    render() {
        const {list} = this.props;
        return (
            <ReactCSSTransitionGroup
                transitionName="animation"
                transitionAppear={true}
                transitionAppearTimeout={400}
                component="div"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <div className="animation container">
                    {
                        list.map((item, index) => {
                                return (

                                    <User key={index} user={item}/>
                                )
                            }
                        )
                    }
                </div>
            </ReactCSSTransitionGroup>

        )

    }
}