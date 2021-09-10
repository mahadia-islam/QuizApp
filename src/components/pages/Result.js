import Summary from './../Summary';
import Analysis from '../Analysis';
import { useHistory, useParams } from 'react-router-dom';
import useAnswerList from './../../hooks/useAnswers';
import _ from 'lodash';


function Result() {

    const { id } = useParams();
    const { location } = useHistory();
    const { state } = location;
    const { qna } = state;

    const { answers } = useAnswerList(id);

    function calculate() {
        let score = 0;
        answers.forEach((question,index1) => {
            let correctIndexes = [];
            let checkedIndexes = [];
            question.options.forEach((option, index2) => {
                if (option.correct === true) {
                    correctIndexes.push(index2);
                }
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });
            if (_.isEqual(correctIndexes,checkedIndexes)) {
                score = score + 5;
            }
        });

        return score;

    }

    const userScore = calculate();

    return (
        <>
            <Summary score={userScore} noq={ answers.length }/>
            <Analysis answers={ answers }/>
        </>
    )
}

export default Result;