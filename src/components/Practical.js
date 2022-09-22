import '../styles/Practical.css';
import { Component } from "react";

class Practical extends Component {
  render() {
    const practical = [
      {
        companyName: "Company Inc.",
        position: "Worker Guy",
        tasks: "helper, doer, gopher, manager",
        dateFrom: "Jan 2000",
        dateTo: "Oct 2022",
      },
    ];

    return (
      <div className="practical">
        <h2>Practical</h2>
        {practical.map((e) => {
          return (
            <div className="practical">
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.companyName}
              />
              <button data-id={e.id}>Delete</button>
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.position}
              />
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.tasks}
              />
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.dateFrom}
              />
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.dateTo}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Practical;
