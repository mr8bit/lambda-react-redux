import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from "./../../components/Article";
import * as actionTeam from "../../actions/team";
import {bindActionCreators} from "redux";
import NavBreadcrumb from "./../../components/Navigation/NavBreadcrumb";
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import BigHeadTitle from '../../components/Head/BigHeadTitle'
import about_bg from "./about_bg.png";
import HeadOnHead from '../../components/Head/HeadOnHead'
import ListTeam from '../../components/Team/ListTeam'
class AboutView extends React.Component {

    static propTypes = {
        results: PropTypes.array,
        actionTeam: PropTypes.shape({
            fetchTeam: PropTypes.func,
        }),
    };

    componentDidMount() {
        this.props.actionTeam.fetchTeam();
    }

    render() {
        const HeadOnTitle = "Лучшие нашей <span style='font-weight:bold;'>Команды</span>"
        return (
            <div >
                <BigHeadTitle title={"О нас"} image={about_bg}/>
                <div className="panel panel--big panel--small">
                    <div className="panel__10 panel__about">
                        <div className="panel__text">
                            Lambda – это самое молодёжное сообщество программистов, организованное студентами
                            Московского Авиационного Института.
                            Мы предлагаем обучение современным IT технологиям в формате изучения через практику, а также
                            предоставляем площадку для выступления с докладами более опытных студентов и экспертов из
                            крупных IT компаний. Кроме этого, наши команды участвуют в хакатонах, конкурсах и
                            научно-технических выставках.
                            Дружественный и сплоченный коллектив не даст заскучать во время сессии и не оставит без
                            помощи в трудной ситуации.
                            Ещё нагрузим ценным навыком работать в команде, даже сопротивляющихся.
                            Lambda – именно тот элемент института, который подготовит к самостоятельной работе.
                        </div>
                    </div>
                </div>
                <HeadOnHead title={HeadOnTitle} back_title={"Наша команда"}/>
                <ListTeam list={this.props.team.results} />



            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        team: state.team,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionTeam: bindActionCreators(actionTeam, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutView);
export {AboutView as AboutViewNotConnected};