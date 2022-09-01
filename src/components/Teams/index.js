import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  const style = {
    backgroundColor: props.secondaryColor,
    borderColor: props.primaryColor,
  };

  return (
    // props.employees.length > 0  ? <section> :''
    props.employees.length > 0 &&
    <section className="team" style={style}>
      <h3 style={style}>{props.name}</h3>
      <div className='employees'>
      {props.employees.map( 
        employee => <Employee 
        backgroundColor={props.primaryColor}
        key={employee.name}
        name={employee.name} 
        role={employee.role}
        image={employee.image}
        />)}
        </div>
    </section>
  );
};

export default Team;
