import React from "react";
import "./ListEmployees.css";

function ListEmployees({ data, handleDelete }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="employees" key={item.id}>
            <div>
              <p>
                {item.firstName} {item.lastName}
                <span>- {item.sex}</span>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(item.id)}
                >
                  X
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListEmployees;
