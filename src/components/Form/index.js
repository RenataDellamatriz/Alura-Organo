import Button from "../Button";
import DropDownList from "../DropDownList";
import TextField from "../TextField";
import "./Form.css";
import { useState } from 'react'

const Form = (props) => {

  const saving = (event) => {
    event.preventDefault()
    props.handleSubmit({
      name,
      role,
      image,
      team
    })
  }

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  return (
    <section className="form">
      <form onSubmit={saving}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField 
        mandatory={true} 
        label="Nome" 
        placeholder="Digite seu nome aqui"
        inputValue = {name} 
        handleChange = {inputValue => setName(inputValue)}
        />
        <TextField 
        mandatory={true} 
        label="Cargo" 
        placeholder="Digite seu cargo"
        inputValue = {role} 
        handleChange = {inputValue => setRole(inputValue)} 
        />
        <TextField 
        label="Imagem" 
        placeholder="Informe o endereço da imagem"
        inputValue = {image} 
        handleChange = {inputValue => setImage(inputValue)} 
        />
        <DropDownList 
        mandatory={true} 
        label="Time" 
        itens={props.teams}
        inputValue = {team}
        handleChange={inputValue => setTeam(inputValue)}/>
        <Button>Criar card </Button>
      </form>
    </section>
  );
};

export default Form;
