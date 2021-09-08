function Checkbox({text,className}) {
    return (
        <label className={className}>
            <input type="checkbox" />
            <span>{text}</span>
        </label>
    )
}

export default Checkbox;