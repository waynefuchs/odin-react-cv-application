import { Component } from "react";
import uniqid from "uniqid";
import "../styles/Education.css";

class Education extends Component {
  render() {
    const education = [
      {
        id: uniqid(),
        school: "School Name",
        degree: "Title of Study",
        dates: "Sept 2019 - June 2022",
      },
      {
        id: uniqid(),
        school: "Another School Name",
        degree: "Some other Title of Study",
        dates: "Sept 2019 - June 2022",
      },
    ];
    return (
      <div className="education">
        <h2>Education</h2>
        {education.map((e) => {
          return (
            <div className="school">
              <input
                className="edit school-name"
                type="text"
                data-id={e.id}
                value={e.school}
              />
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.degree}
              />
              <button data-id={e.id}>Delete</button>
              <input
                className="edit"
                type="text"
                data-id={e.id}
                value={e.dates}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
