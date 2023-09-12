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
    <div className="component_tile_with_heading_container">
      <h3 className="component_heading">All Components</h3>
      <div className="component_tile_container">
        {components.map((item) => {
          return <ComponentTile title={item} />;
        })}
      </div>
    </div>
  );
}
