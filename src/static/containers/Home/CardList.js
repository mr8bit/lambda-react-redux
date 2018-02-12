import React from "react";
import Card from "../../components/Card";

export default class CardList extends React.Component {

    render() {
        const {list} = this.props;

        return (
            <div>{
                list && list.map((item, index) => {
                        return (
                            <Card key={index} card={item}/>
                        )
                    }
                )
            }
            </div>
        )

    }
}