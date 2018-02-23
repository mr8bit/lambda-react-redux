import React from "react";
import "./body.sass";

export default class Body extends React.Component {
    render() {
        const {text} = this.props;
        return (
            <div className="article-body">
                <div className="article-body__content" dangerouslySetInnerHTML={{__html: text}}>

                </div>
            </div>
        )
    }
}
