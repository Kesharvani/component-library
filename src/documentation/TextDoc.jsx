import Text from "../component/text/Text";
import "./Documentation.css";
const TextDoc = () => {
  return (
    <div className="docs-container">
      <h1>Text</h1>
      <p>
        Text are essential to elevate the typography and hierarchy of your web
        application. With a wide range of Text styles, sizes, and variations, it
        simplifies the creation of clear and visually engaging content
        structures.{" "}
      </p>
      <p>The various Text are as follows:</p>
      <div className="hd-container">
        <Text type="xl">Extra Large Text</Text>
        <Text type="xl-italic">Extra Large Text Italic</Text>
        <Text type="large">Large Text</Text>
        <Text type="large-italic">Large Text Italic</Text>
        <Text type="medium">Medium Text</Text>
        <Text type="medium-italic"> Medium Text Italic</Text>
        <Text type="small">Small Text</Text>
        <Text type="small-italic">Small Text Italic</Text>
      </div>
      <hr />
      <h2>Usage</h2>
      <ul>
        <li>{`<Text type="xl">Extra Large Text</Text>`}</li>
        <li>{`<Text type="xl-italic">Extra Large Text Italic</Text>`}</li>
        <li>{`<Text type="large">Large Text</Text>`}</li>
        <li>{`<Text type="large-italic">Large Text Italic</Text>`}</li>
        <li>{`<Text type="medium">Medium Text</Text>`}</li>
        <li>{`<Text type="medium-italic"> Medium Text Italic</Text>`}</li>
        <li>{`<Text type="small">Small Text</Text>`}</li>
        <li>{`<Text type="small-italic">Small Text Italic</Text>`}</li>
      </ul>
      <h2>Extra large Text italic</h2>
      <p>
        Just add '-italic' to the prexisting type 'xl' and that will achieve
        italic styling.
      </p>
      <p>The type attribute takes the following values:</p>
      <ul>
        <li>Large: type="large"</li>
        <li>Large Italic: type="large-italic"</li>
        <li>Medium: type="medium"</li>
        <li>Medium Italic: type="medium-italic"</li>
        <li>Small: type="small"</li>
        <li>Small Italic: type="small-italic"</li>
      </ul>
    </div>
  );
};

export default TextDoc;
