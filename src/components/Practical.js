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
              <EditView isEditing={isEditing} className="company-name" id={e.id} value={e.companyName} />
              <EditView isEditing={isEditing} id={e.id} value={e.position} />
              <EditView isEditing={isEditing} id={e.id} value={e.tasks} />
              <div>
                <EditView isEditing={isEditing} id={e.id} value={e.dateFrom} />
                <EditView isEditing={isEditing} id={e.id} value={e.dateTo} />
              </div>
              {isEditing?(<button data-id={e.id}>Delete</button>):(null)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Practical;
