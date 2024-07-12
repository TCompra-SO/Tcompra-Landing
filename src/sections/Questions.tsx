import React from 'react'
import { ContainerCss } from '../styles/components/containers/container'
import QuestionsTitle from '../modules/questions/QuestionsTitle';
import QuestionAcordeon from '../modules/questions/QuestionAcordeon';
import FadeUp from '../components/Motion/FadeUp';

const Questions = () => {
    return (


        <ContainerCss>
            <FadeUp id='title-Questions'>
        <QuestionsTitle />
        </FadeUp>
        <QuestionAcordeon />
        </ContainerCss>

    )
}

export default Questions;