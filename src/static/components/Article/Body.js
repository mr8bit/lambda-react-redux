import React from "react";
import "./body.sass";
import hljs from "./highlight.pack"

export default class Body extends React.Component {
    componentDidMount() {
        const run = document.getElementsByTagName("code");
        const len = run.length;
        for (var i = 0; i < len; i++) {
            const lang = run[i].className.split('language-')[1]
            run[i].innerHTML = hljs.highlight(lang, run[i].innerText).value
        }
    }

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
