import { Component } from "react";
import './styles/General.css';

class General extends Component {
    render() {
        const name = "John Doe";
        const email = "johndoe@deer.com";
        const phone = "(123) 123-1234";

        return (
            <div className="base general">
                <input className="edit large" type="text" id="name" value={name} />
                <input className="edit" type="text" id="email" value={email} />
                <input className="edit" type="text" id="phone" value={phone} />
            </div>
        );
    }
}

export default General;