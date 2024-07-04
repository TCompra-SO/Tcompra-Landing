import React from 'react'
import { ContainerCss } from '../styles/components/containers/container'
import QuestionsTitle from '../modules/questions/QuestionsTitle';
import QuestionAcordeon from '../modules/questions/QuestionAcordeon';


const Questions = () => {
    return (


        <ContainerCss>
        <QuestionsTitle />
        <QuestionAcordeon />
        </ContainerCss>

    )
}

export default Questions;