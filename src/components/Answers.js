import classes from './../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox text="A New Game 1" className={`${classes.answer} ${classes.wrong}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer} ${classes.correct}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`} />
      <Checkbox text="A New Game 1" className={`${classes.answer}`}/>
    </div>
  )
}

export default Answers;