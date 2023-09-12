import React from "react";
import "./HigherOderComponent.css";
import { useComponent } from "../../componentContext/ComponentContext";
import { dynamicHelper } from "../../helper/dynamicHelper";
import ComponentTile from "../componentTile/ComponentTile";
import { components } from "../../helper/dynamicHelper";
export default function HigherOderComponent() {
  const { selectedComponent } = useComponent();

  return (
    <div className="HigherOderComponent_container">
      <div>
        {components.map((item) => {
          return <ComponentTile title={item} isSideBar key={item} />;
        })}
      </div>

      {dynamicHelper(
        selectedComponent,
        <div>this is Avtar</div>,
        <div>this is alert</div>,
        <div>this is badge</div>,
        <div>this is Button</div>,
        <div>this is Heading</div>,
        <div>this is Card</div>,
        <div>this is Text</div>,
        <div>this is Image</div>
      )}
    </div>
  );
}
