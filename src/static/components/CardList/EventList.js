import React from "react";
import Card from "./EventCard";

export default class EventList extends React.Component {

    getOher = () => {
        this.props.loadMore()
    }

    render() {
        const {list} = this.props;
        console.log(list)
        return (
            <div>{
                list && list.map((item) => {
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