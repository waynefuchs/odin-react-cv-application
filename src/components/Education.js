import { Component } from "react";
import uniqid from "uniqid";
import "../styles/Education.css";
import EditView from "./EditView";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      education: [],
    };
    this.setEducation = this.setEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  addEducation() {
    this.setState({
      education: [
        ...this.state.education,
        {
          id: uniqid(),
          school: "",
          degree: "",
          dates: "",
        },
      ],
    });
  }

  deleteEducation(id) {
    this.setState({
      education: this.state.education.filter((e) => e.id !== id),
    });
  }

  setEducation(id, key, value) {
    this.setState({
      education: this.state.education.map((e) => {
        if (e.id === id) e[key] = value;
        return e;
      }),
    });
  }

  render() {
    const { isViewing } = this.props;
    if (!this.state.education.length && isViewing) return null;
    return (
      <div className="education">
        <div className="school-heading">
          <h2>Education</h2>
          {!isViewing ? (
            <button
              className="school-button"
              onClick={() => this.addEducation()}
            >
              Add
            </button>
          ) : null}
        </div>

        {this.state.education.map((edu) => {
          return (
            <div
              className={
                isViewing ? "school school-view" : "school school-edit"
              }
              key={edu.id}
            >
              <EditView
                key={`school-${edu.id}`}
                className="school-name"
                edit={(event) =>
                  this.setEducation(edu.id, "school", event.target.value)
                }
                isViewing={isViewing}
                value={edu.school}
                placeholder="School Name"
              />
              <EditView
                key={`degree-${edu.id}`}
                edit={(event) =>
                  this.setEducation(edu.id, "degree", event.target.value)
                }
                isViewing={isViewing}
                value={edu.degree}
                placeholder="Degree"
              />
              <EditView
                key={`dates-${edu.id}`}
                edit={(event) =>
                  this.setEducation(edu.id, "dates", event.target.value)
                }
                isViewing={isViewing}
                value={edu.dates}
                placeholder="Dates"
              />
              {!isViewing ? (
                <button
                  className="school-button"
                  key={`delete-${edu.id}`}
                  onClick={(e) => this.deleteEducation(edu.id)}
                  id={edu.id}
                >
                  Delete
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
