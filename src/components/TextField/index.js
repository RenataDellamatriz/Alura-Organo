import './TextField.css'

const TextField = (props) => {
    
    const onTypeChange = (event) => {
       props. handleChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.inputValue} onChange={onTypeChange} required={props.mandatory} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField