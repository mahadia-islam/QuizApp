import classes from './../styles/Form.module.css';

function Form({ children,className }) {
    return (
        <form className={`${className} ${classes.form}`}>
            {children}
        </form> 
    )
}

export default Form;