import { useState } from "react";
import "../styles/General.css";
import EditView from "./EditView";

const General = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="general">
      <EditView
        edit={(e) => setName(e.target.value)}
        isViewing={props.isViewing}
        className="large"
        value={name}
        placeholder="Your Name"
      />

      <EditView
        edit={(e) => setEmail(e.target.value)}
        isViewing={props.isViewing}
        value={email}
        type="email"
        placeholder="Email"
      />

      <EditView
        edit={(e) => setPhone(e.target.value)}
        isViewing={props.isViewing}
        value={phone}
        type="tel"
        placeholder="Phone"
      />
    </div>
  );
};

export default General;
