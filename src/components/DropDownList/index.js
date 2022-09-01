import './DropDownList.css'

const DropDownList = (props) => {
    
return(
    <div className='drop-down-list'>
        <label>{props.label}</label>
        <select 
        required={props.mandatory} 
        value={props.inputValue} 
        onChange={event => props.handleChange(event.target.value)}>
            <option valur='' ></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
)
}

export default DropDownList