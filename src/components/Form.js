import classes from './../styles/Form.module.css';

function Form({ children}) {
    return (
        <form className={`${classes.signup} ${classes.form}`}>
            {children}
        </form> 
    )
}

export default Form;