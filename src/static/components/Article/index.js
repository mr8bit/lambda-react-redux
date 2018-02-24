import React from "react";
import Head from "./Head";
import Body from "./Body";
import PropTypes from 'prop-types';
import './_media.sass'
import Footer from "./Footer";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class Article extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {content} = this.props;
        console.log(content);
        return (
            <ReactCSSTransitionGroup
                transitionName="animation"
                transitionAppear={true}
                transitionAppearTimeout={400}
                component="div"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                <div className="animation">
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
            </ReactCSSTransitionGroup>
        )
    }
}

