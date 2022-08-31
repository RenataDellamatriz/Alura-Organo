import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  const style = {
    backgroundColor: props.secondaryColor,
    borderColor: props.primaryColor,
  };

  return (
    <section className="team" style={style}>
      <h3 style={style}>{props.name}</h3>
      <Employee />
      <Employee />
    </section>
  );
};

export default Team;
