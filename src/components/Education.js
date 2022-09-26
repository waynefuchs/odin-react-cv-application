import { Component } from "react";
import uniqid from "uniqid";
import "../styles/Education.css";
import EditView from "./EditView";

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
    const {isEditing} = this.props;    
    return (
      <div className="education">
        <h2>Education</h2>
        {education.map((e) => {
          return (
            <div className="school">
              <EditView className="school-name" isEditing={isEditing} id={e.id} value={e.school} />
              <EditView isEditing={isEditing} id={e.id} value={e.degree} />
              <EditView isEditing={isEditing} id={e.id} value={e.dates} />
              {isEditing?<button id={e.id}>Delete</button>:null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
