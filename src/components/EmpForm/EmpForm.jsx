import React from "react";
import "./EmpForm.css";

function EmpForm({ data, onChange, onAdd }) {
  return (
    <div className="prog-form">
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Jmeno"
          value={data.firstName}
          onChange={onChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Prijmeni"
          value={data.lastName}
          onChange={onChange}
        />
        <label>Pozice:</label>
        <select name="sex" value={data.sex} onChange={onChange}>
          <option value="Man" id="Man">
            Man
          </option>
          <option value="Women" id="Women">
            Women
          </option>
        </select>
      </form>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default EmpForm;
