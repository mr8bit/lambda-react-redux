import React from "react";
import "./head.sass";
export default class Body extends React.Component {
    render() {
        const {text} =  this.props;
        return (
            <div className="article-body">
                <div className="article-body__content">
                    {text}
                </div>
            </div>
        )
    }
}
