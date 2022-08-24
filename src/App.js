import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {

  const [employees, setEmployees] = useState([])

  const handleNewSubmit = (employee) => {
    console.log(employee)
  }

  return (
   <div className="App">
        <Banner />
        <Form handleSubmit = {employee => handleNewSubmit(employee)}/>
   </div>  
  );
}

export default App;
