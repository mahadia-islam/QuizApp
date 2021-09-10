import ProgressBar from "../ProgressBar";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import { useHistory, useParams } from "react-router";
import { useEffect, useReducer, useState } from "react";
import useQuestions from './../../hooks/useQuestions';
import _ from 'lodash';
import { useAuth } from './../../context/AuthContext';
import { getDatabase, ref, set } from "@firebase/database";

const initialState = null;

const reducer = (state,action) => {
    switch (action.type) {
        case 'questions':
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case 'answer':
            const question = _.cloneDeep(state);
            question[action.questionId].options[action.optionIndex].checked = action.value;
            return question;
        default:
            return state;
    }
}

function Quiz() {

    const { id } = useParams();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { questions, loading } = useQuestions(id);
    const { currentUser } = useAuth();
    const history = useHistory();

    const [qna, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        dispatch({
            type: 'questions',
            value:questions
        });
    }, [questions]);
    
    function handleAnswerChange(e, index) {
        dispatch({
            type: 'answer',
            questionId: currentQuestion,
            optionIndex: index,
            value:e.target.checked
        })
    }

    // handle when user clicks the next button to get next question

    function nextQuestion() {
        if (currentQuestion + 1  < questions.length) {
            setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
        }
    }

    // handle when user click the prev question button to get prev question

    function prevQuestion() {
        if (currentQuestion >= 1  && currentQuestion <= questions.length) {
            setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
        }
    }

    // calculate percentage of the progressBar

    const percentage = questions.length > 0 ? (currentQuestion + 1) / questions.length * 100 : 0;

    async function submit() {
        const { uid } = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [id]: qna
        });
        history.push({
            pathname: `/result/${id}`,
            state: {
                qna
            }
        });
    }

    return (
        <div>
            {loading && <div>Loading...</div>}
            {!loading && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleAnswerChange}
                        type={true}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        prev={prevQuestion}
                        progress={percentage}
                        submit={submit}
                    />
                    <Miniplayer />
                </>
            )}
        </div>
    )
}

export default Quiz;