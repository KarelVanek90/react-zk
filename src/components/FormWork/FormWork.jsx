import React, { useEffect, useState } from "react";
import "./FormWork.css";

function FormWork({ data }) {
  const [metr, setMetr] = useState(0);
  const [hours, setHours] = useState(0);
  const [workValue, setWorkValue] = useState(0);
  const [forWork, setForWork] = useState(true);

  useEffect(() => {
    setWorkValue(metr / hours);
    if (data >= workValue) {
      setForWork(false);
    } else {
      setForWork(true);
    }
  }, [metr, hours, data, workValue]);
  return (
    <div className="form-work">
      <form>
        <label htmlFor="metr">Pocet metru</label>
        <input
          type="number"
          id="metr"
          name="metr"
          value={metr}
          onChange={(e) => {
            setMetr(e.target.value);
          }}
        />
        <label htmlFor="hours">Pocet hodin</label>
        <input
          type="number"
          id="hours"
          name="hours"
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
        />
      </form>
      <button
        disabled={forWork}
        className={`${!forWork ? "active" : "deactive"} btn-work`}
      >
        Schvalit
      </button>
    </div>
  );
}

export default FormWork;
