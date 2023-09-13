import Headings from "../component/heading/Headings";

import "./Documentation.css";
const HeadingDoc = () => {
  return (
    <div className="docs-container">
      <h1>Headings</h1>
      <p>
        Headings are essential to elevate the typography and hierarchy of your
        web application. With a wide range of heading styles, sizes, and
        variations, it simplifies the creation of clear and visually engaging
        content structures.{" "}
      </p>
      <p>The various headings are as follows:</p>
      <div className="hd-container">
        <Headings type="h1">Extra Large Heading</Headings>
        <Headings type="h1-italic">Extra Large Heading Italic</Headings>
        <Headings type="h2">Large Heading</Headings>
        <Headings type="h2-italic">Large Heading Italic</Headings>
        <Headings type="h3">Medium Heading</Headings>
        <Headings type="h3-italic"> Medium Heading Italic</Headings>
        <Headings type="h4"> extra medium</Headings>
        <Headings type="h5"> small</Headings>
        <Headings type="h6"> extra small</Headings>
      </div>
      <hr />
      <h2>Usage</h2>
      <ul>
        <li>{`<Headings type="h1">Extra Large Heading</Headings>`}</li>
        <li>{`<Headings type="h1-italic">Extra Large Heading Italic</Headings>`}</li>
        <li>{`<Headings type="h2">Large Heading</Headings>`}</li>
        <li>{`<Headings type="h2-italic">Large Heading Italic</Headings>`}</li>
        <li>{`<Headings type="h3">Medium Heading</Headings>`}</li>
        <li>{`<Headings type="h3-italic"> Medium Heading Italic</Headings>`}</li>
        <li>{`<Headings type="h4"> extra medium</Headings>`}</li>
        <li>{`<Headings type="h5"> small</Headings>`}</li>
        <li>{`<Headings type="h6"> extra small</Headings>`}</li>
      </ul>
      <h2>Extra large heading italic</h2>
      <p>
        Just add '-italic' to the prexisting type 'h1' and that will achieve
        italic styling.
      </p>
      <p>The type attribute takes the following values:</p>
      <ul>
        <li>Extra Large: type="h1"</li>
        <li>Extra Large Italic: type="h1-italic"</li>
        <li>Large: type="h2"</li>
        <li>Large Italic: type="h2-italic"</li>
        <li>Medium Heading: type="h3"</li>
        <li>Medium Heading Italic: type="h3-italic"</li>
        <li>extra medium: type="h4"</li>
        <li>Small: type="h5"</li>
        <li>extra Small: type="h6"</li>
      </ul>
    </div>
  );
};

export default HeadingDoc;
