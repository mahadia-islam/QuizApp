function Checkbox({ classname,text,handleChange,...rest }) {
    return (
        <label className={ classname }>
            <input type="checkbox" onChange={handleChange} {...rest} />
            <span>{text}</span>
        </label>
    )
}

export default Checkbox;