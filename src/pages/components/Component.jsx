import React from "react";
import "./Component.css";
import ComponentTile from "../../common/componentTile/ComponentTile";
export default function Component() {
  const components = [
    "Avatar",
    "Alert",
    "Badge",
    "Button",
    "Heading",
    "Card",
    "Text",
    "Image",
  ];
  return (
    <div>
      {components.map((item) => {
        return <ComponentTile title={item} />;
      })}
    </div>
  );
}
