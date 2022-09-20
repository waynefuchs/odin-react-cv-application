import { Component } from "react";
import uniqid from 'uniqid';

class Education extends Component {
    render() {
        const education = [
            {
                id: uniqid(),
                school: 'School Name',
                degree: 'Title of Study',
                dates: 'Sept 2019 - June 2022',
            },
            {
                id: uniqid(),
                school: 'Another School Name',
                degree: 'Some other Title of Study',
                dates: 'Sept 2019 - June 2022',
            },

        ];
            return (
            <div class="education">
                <h2>Education</h2>
                {
                    education.map(e => {
                        return (
                            <div>
                                <input className="edit"
                                    type="text"
                                    data-id={e.id}
                                    value={e.school} />
                                <input className="edit"
                                    type="text"
                                    data-id={e.id}
                                    value={e.degree} />
                                <input className="edit"
                                    type="text"
                                    data-id={e.id}
                                    value={e.dates} />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Education;