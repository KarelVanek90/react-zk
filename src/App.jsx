import { useEffect, useState } from "react";
import "./App.css";
import data from "./employees.json";
import ListEmployees from "./components/ListEmployees/ListEmployees";
import EmpForm from "./components/EmpForm/EmpForm";
import Togglers from "./components/Togglers/Togglers";
import FormWork from "./components/FormWork/FormWork";

function App() {
  const [employees, setEmployees] = useState(data.employees);
  const [newEmp, setNewEmp] = useState({
    id:
      employees.length > 0
        ? Math.max(...employees.map((worker) => worker.id)) + 1
        : 1,
    firstName: "",
    lastName: "",
    sex: "Man",
  });

  const [active, setActive] = useState(1);
  const [workValue, setWorkValue] = useState(0);
  const [man, setMan] = useState(0);
  const [women, setWomen] = useState(0);

  useEffect(() => {
    let manI = 0;
    let womenI = 0;
    let man = 1;
    let women = 0.5;
    for (const work of employees) {
      if (work.sex === "Man") {
        man += 1;
        manI += 1;
      } else {
        women += 0.5;
        womenI += 1;
      }
    }
    const celkem = man + women;
    setWorkValue(celkem);
    setMan(manI);
    setWomen(womenI);
  }, [employees]);

  const handleDelete = (idToDel) => {
    setEmployees(employees.filter((empl) => empl.id !== idToDel));
  };

  const handleChange = (e) => {
    const updateEmp = { ...newEmp, [e.target.name]: e.target.value };
    setNewEmp(updateEmp);
  };

  useEffect(() => {
    console.log(newEmp);
  }, [newEmp]);

  const handleAdd = () => {
    setEmployees((employees) => {
      return [...employees, newEmp];
    });
    const newId = newEmp.id + 1;
    const udpateEmp = {
      id: newId,
      firstName: "",
      lastName: "",
      sex: "Man",
    };
    setNewEmp(udpateEmp);
  };

  const action = (source) => {
    switch (source) {
      case "emp": {
        setActive(1);
        break;
      }
      case "work": {
        setActive(2);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <Togglers data={action} />
        {active === 1 && (
          <>
            <h2>Zamestnanci</h2>
            <ListEmployees data={employees} handleDelete={handleDelete} />
            <EmpForm data={newEmp} onChange={handleChange} onAdd={handleAdd} />
          </>
        )}

        {active === 2 && (
          <>
            <h2>Ukoly</h2>
            <p>Pocet muzu: {man}</p>
            <p>Pocet zen: {women}</p>
            <p>Zamestnanci zvladnou : {workValue} m za hodinu</p>
            <FormWork data={workValue} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
