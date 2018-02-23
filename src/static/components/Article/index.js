import React from "react";
import Head from "./Head";
import Body from "./Body";
import PropTypes from 'prop-types';
import './_media.sass'
import Footer from "./Footer";

export default class Article extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {content} = this.props;
        console.log(content);
        return (
            <div>
                <Head title={content.title}
                      image={content.image}
                      date={content.dateCreate}
                      category={content.categoryName}
                      author_name={content.author.name}
                />
                <Body text={content.description}/>
                <Footer tags={content.tags}
                        author={content.author}
                />
            </div>
        )
    }
}

