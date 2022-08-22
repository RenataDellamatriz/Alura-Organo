import Button from "../Button";
import DropDownList from "../DropDownList";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {

  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome aqui" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropDownList label="Time" itens={teams}/>
        <Button>Criar card </Button>
      </form>
    </section>
  );
};

export default Form;