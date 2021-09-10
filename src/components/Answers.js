import classes from './../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers({ options = [], handleChange, type = true}) {
  return (
    <div className={classes.answers}>
      {
        options.map((option, index) => {
          if (type) {
            return (
              <Checkbox
                classname={`${classes.answer}`}
                text={option.title}
                value={index}
                handleChange={(e) => handleChange(e,index)}
                checked={option.checked}
                key={option.title}
              />
            )
          } else {
            return (
              <Checkbox
                classname={`
                  ${classes.answer}
                  ${option.correct ? classes.correct : option.checked ? classes.wrong : classes.answer}
                `}
                text={option.title}
                value={index}
                disabled
                checked={option.checked}
                key={option.title}
              />
            )
          }
        })
      }
    </div>
  )
}

export default Answers;