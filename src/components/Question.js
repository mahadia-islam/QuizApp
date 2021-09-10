import classes from './../styles/Question.module.css';
import Answers from './Answers';

function Question({ answers = [] }) {
    
    console.log(answers);
    
    return answers.map((answer,index) => {
        return (
            <div className={classes.question} key={index}>
                <div className={classes.qtitle}>
                    <span className="material-icons-outlined"> help_outline </span>
                    { answer.title }
                </div>
                <Answers options={ answer.options } type={false}/>
            </div>
        )
    });
}

export default Question;