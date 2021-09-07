import classes from './../styles/Illustration.module.css';
import image from './../asset/image/signup.svg';

function Illustration() {
    return (
        <div className={classes.illustration}>
            <img src={image} alt="Signup" />
        </div>
    )
}

export default Illustration;