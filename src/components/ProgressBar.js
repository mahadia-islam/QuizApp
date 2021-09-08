import classes from './../styles/ProgressBar.module.css';
import buttonClasses from './../styles/Button.module.css';

function ProgressBar() {
    return (
        <div className={classes.progressBar}>
          <div className={classes.backButton}>
            <span className="material-icons-outlined"> arrow_back </span>
          </div>
          <div className={classes.rangeArea}>
            <div className={classes.tooltip}>24% Cimplete!</div>
            <div className={classes.rangeBody}>
              <div className={classes.progress}></div>
            </div>
          </div>
          <a href="result.html">
            <button className={`${buttonClasses.button} next`}>
              <span>Next Question</span>
              <span className="material-icons-outlined"> arrow_forward </span>
            </button>
          </a>
        </div>
    )
}

export default ProgressBar;