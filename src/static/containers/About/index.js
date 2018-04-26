import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Article from "./../../components/Article";
import * as actionArticle from "../../actions/article";
import {bindActionCreators} from "redux";
import NavBreadcrumb from "./../../components/Navigation/NavBreadcrumb";
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import BigHeadTitle from '../../components/Head/BigHeadTitle'
import about_bg from "./about_bg.png";
import HeadOnHead from '../../components/Head/HeadOnHead'
class AboutView extends React.Component {

    static propTypes = {
        results: PropTypes.array,
        actionUsers: PropTypes.shape({
            fetchArticle: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        this.props.actionArticle.fetchArticle(this.props.slug);
    }

    render() {
        const HeadOnTitle = "Лучшие нашей <span style='font-weight:bold;'>Команды</span>"
        return (
            <div>
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




            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.resource,
        slug: ownProps.match.params.slug,
        posts: state.posts,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionArticle: bindActionCreators(actionArticle, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutView);
export {AboutView as AboutViewNotConnected};