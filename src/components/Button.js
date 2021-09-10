import classes from './../styles/Button.module.css';

function Button({ children,classNames,...rest }) {
    return (
        <button className={`${classes.button} ${classNames}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;