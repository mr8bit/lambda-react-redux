/**
 * Created by lambada on 08.02.18.
 */
import React, {Component} from "react";
import "./head.sass";

export default class User extends Component {

    render() {
        const {user} = this.props;
        return (
            <div className="panel-grid__item">
                <div className="panel-grid__img" style="background-image: url('img/avatar/tmayzenberg.jpg')">
                    <div className="panel-grid__description">
                        <span className="panel-grid__name">{user.name}</span>
                        <span className="panel-grid__position">{user}</span>
                    </div>
                    <div className="panel-grid__social">
                        <a href="#" className="panel-grid__icon ">
                            <span className="icon icon-vk"></span>
                        </a>
                        <a href="#" className="panel-grid__icon  ">
                            <span className="icon icon-twitter"></span>
                        </a>
                        <a href="#" className="panel-grid__icon ">
                            <span className="icon icon-github"></span>
                        </a>
                        <a href="#" className="panel-grid__icon ">
                            <span className="icon icon-instagram"></span>
                        </a>
                    </div>
                </div>
            </div>


        )
    }

}


