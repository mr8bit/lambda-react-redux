import React from "react";
import Card from "./Card/index";
import PropTypes from "prop-types";

export default class CardList extends React.Component {

    constructor(props) {
        super(props);
    }

    getOher = () => {
        this.props.loadMore()
    }

    render() {
        const {list, nextUrl} = this.props;
        return (
            <div>{
                list.map((item, index) => {
                        return (

                            <Card key={item.id} card={item}/>
                        )
                    }
                )
            }

                <div className="card__more">
                    <button onClick={this.getOher.bind(this)}
                            className="btn  btn--small btn--rounded btn--no-border btn--full-width ">
                        <span>ЗАГРУЗИТЬ</span>
                        <span className="icon icon-arrow-right icon-rotate-90 btn__icon-13"></span></button>
                </div>
            </div>
        )

    }
}