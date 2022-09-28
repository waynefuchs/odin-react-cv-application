import "../styles/Practical.css";
import { Component } from "react";
import EditView from "./EditView";
import uniqid from "uniqid";

class Practical extends Component {
  constructor() {
    super();

    this.state = {
      practical: [],
    };

    this.addPractical = this.addPractical.bind(this);
    this.deletePractical = this.deletePractical.bind(this);
    this.updatePractical = this.updatePractical.bind(this);
  }

  addPractical() {
    this.setState({
      practical: [
        ...this.state.practical,
        {
          id: uniqid(),
          title: "",
          companyName: "",
          position: "",
          description: "",
          dateFrom: "",
          dateTo: "",
        },
      ],
    });
  }

  deletePractical(id) {
    this.setState({
      practical: this.state.practical.filter((e) => e.id !== id),
    });
  }

  updatePractical(id, key, value) {
    this.setState({
      practical: this.state.practical.map((e) => {
        if(e.id === id) e[key] = value;
        return e;
      })
    })
  }

  render() {
    const { isViewing } = this.props;

    return (
      <div className="practical">
        <div className="practical-heading">
          <h2>Practical</h2>
          {!isViewing ? (
            <button
              className="school-button"
              onClick={() => this.addPractical()}
            >
              Add
            </button>
          ) : null}
        </div>

        {this.state.practical.map((prac) => {
          return (
            <div className="work-experience" key={prac.id}>
              <EditView
                isViewing={isViewing}
                className="company company-name"
                placeholder="Company Name"
                key={`companyName-${prac.id}`}
                edit={(e) => this.updatePractical(prac.id, 'companyName', e.target.value)}
                value={prac.companyName}
              />
              {!isViewing ? (
                <button 
                  className="delete" 
                  key={`delete-${prac.id}`}
                  onClick={() => this.deletePractical(prac.id)}
                  data-id={prac.id}>
                    Delete
                </button>
              ) : null}
              
              <EditView
                isViewing={isViewing}
                className="title"
                placeholder="Position"
                key={`title-${prac.id}`}
                edit={(e) => this.updatePractical(prac.id, 'position', e.target.value)}
                value={prac.position}
              />
              <EditView
                isViewing={isViewing}
                className="description"
                placeholder="Description"
                key={`description-${prac.id}`}
                edit={(e) => this.updatePractical(prac.id, 'description', e.target.value)}
                value={prac.description}
              />
              <EditView
                isViewing={isViewing}
                className="start-date"
                placeholder="Start Date"
                key={`dateFrom-${prac.id}`}
                edit={(e) => this.updatePractical(prac.id, 'dateFrom', e.target.value)}
                value={prac.dateFrom}
              />
              <EditView
                isViewing={isViewing}
                className="end-date"
                placeholder="end-date"
                key={`dateTo-${prac.id}`}
                edit={(e) => this.updatePractical(prac.id, 'dateTo', e.target.value)}
                value={prac.dateTo}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Practical;
