import classes from './../styles/Video.module.css';
import video from './../asset/image/3.jpg'

function Video() {
    return (
        <a href="quiz.html"
        ><div className={ classes.video }>
                <img src={video} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    )
}

export default Video;