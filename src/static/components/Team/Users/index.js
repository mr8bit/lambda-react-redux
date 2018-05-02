/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";

export default class User extends Component {

    render() {
        const {user} = this.props;
        return (
            <div className="panel-grid__item">
                <div className="panel-grid__img" style={{backgroundImage: `url(${user.image})`}}>
                    <div className="panel-grid__description">
                        <span className="panel-grid__name">{user.first_name} {user.last_name}</span>
                        <span className="panel-grid__position">{user.position}</span>
                    </div>
                    <div className="panel-grid__social">
                        {
                            user.social_networks.map((item, index) => {
                                    return (
                                        <a href={item.url} className="panel-grid__icon ">
                                            <span className={item.name}></span>
                                        </a>
                                    )
                                }
                            )
                        }


                    </div>
                </div>
            </div>


        )
    }

}


