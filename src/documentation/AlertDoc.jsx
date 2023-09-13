import Alert from "../component/alert/Alert";
import "./Documentation.css";

const AlertDoc = () => {
  const codeString = "(num) => num + 1";
  return (
    <div className="docs-container">
      <h1> Alerts </h1>
      <p>
        The Alert component is a versatile notification element designed to keep
        your users informed and engaged. It's a fundamental building block for
        providing feedback, alerts, and messages within your web applications.
        The Alert component is designed to be simple and intuitive to use.{" "}
      </p>
      <p>
        You can manage your alerts and display them based on the level of their
        type. The types are categorised as follows:{" "}
      </p>
      <ul>
        <li>Success</li>
        <li>Error</li>
        <li>Warning</li>
      </ul>
      <p>The alerts are as follows: </p>
      <div className="alert_container">
        <Alert type={"success"}>This is a success alert!</Alert>
        <Alert type={"error"}>This is an error alert!</Alert>
        <Alert type={"warning"}>This is a warning alert!</Alert>
      </div>
      <h1>Usage</h1>
      <h3>
        To use these alerts in your web application, install the component
        library, and import the Alert component.
      </h3>
      <ul>
        <li>{`<Alert type={"success"}>This is a success alert!</Alert>`}</li>
        <li>{`<Alert type={"error"}>This is an error alert!</Alert>`}</li>
        <li>{`<Alert type={"warning"}>This is a warning alert!</Alert>`}</li>
      </ul>
    </div>
  );
};

export default AlertDoc;
