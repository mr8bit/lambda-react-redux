import React from "react";
import Head from "./Head";
import Body from "./Body";
import PropTypes from 'prop-types';

import Footer from "./Footer";

export default class Article extends React.Component {

    static propTypes = {
        content: PropTypes.object.isRequired,
    };

    static defaultProps = {
        content: ''
    };

    render() {
        const {content} = this.props;
        console.log(content);
        return (
            <div>
                <Head title={content.title}
                      image={content.image}
                      date={content.dateCreate}
                />
                <Body text={content.description}/>
                <Footer tags={content.tags}
                        author={content.author}
                />
            </div>
        )
    }
}