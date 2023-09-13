import React from "react";
import "./HigherOderComponent.css";
import { useComponent } from "../../componentContext/ComponentContext";
import { dynamicHelper } from "../../helper/dynamicHelper";
import ComponentTile from "../componentTile/ComponentTile";
import { components } from "../../helper/dynamicHelper";
import AvatarDoc from "../../documentation/AvatarDoc";
import AlertDoc from "../../documentation/AlertDoc";
import BadgeDoc from "../../documentation/BadgeDoc";
import ButtonDoc from "../../documentation/ButtonDoc";
import HeadingDoc from "../../documentation/HeadingDoc";
import CardDoc from "../../documentation/CardDoc";
import TextDoc from "../../documentation/TextDoc";
import ImageDoc from "../../documentation/ImageDoc";
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
        <AvatarDoc />,
        <AlertDoc />,
        <BadgeDoc />,
        <ButtonDoc />,
        <HeadingDoc />,
        <CardDoc />,
        <TextDoc />,
        <ImageDoc />
      )}
    </div>
  );
}
