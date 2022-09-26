import "../styles/Practical.css";
import { Component } from "react";
import EditView from "./EditView";

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
    const {isEditing} = this.props;

    return (
      <div className="practical">
        <h2>Practical</h2>
        {practical.map((e) => {
          return (
            <div className="work-experience">
              <EditView isEditing={isEditing} className="company company-name" id={e.id} value={e.companyName} />
              {isEditing?(<button className="delete" data-id={e.id}>Delete</button>):(null)}
              <EditView isEditing={isEditing} className="title" id={e.id} value={e.position} />
              <EditView isEditing={isEditing} className="description" id={e.id} value={e.tasks} />
              <EditView isEditing={isEditing} className="start-date" id={e.id} value={e.dateFrom} />
              <EditView isEditing={isEditing} className="end-date" id={e.id} value={e.dateTo} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Practical;
