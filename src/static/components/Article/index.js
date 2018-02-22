import React from "react";
import Head from "./Head";
import Body from "./Body";
export default class Article extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div>
                <Head title={content.title}
                      image={content.image}
                      date={content.dateCreate}
                />
                <Body text={content.description}/>
            </div>
        )
    }
}