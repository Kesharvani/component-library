import React from "react";
import "./Heading.css";
export default function Headings({ children, type }) {
  const getData = (type, children) => {
    switch (type) {
      case "h1":
        return <h1 className="h1">{children}</h1>;
      case "h1-italic":
        return <h1 className="h1-italic">{children}</h1>;
      case "h2":
        return <h2 className="h2">{children}</h2>;
      case "h2-italic":
        return <h2 className="h2-italic">{children}</h2>;
      case "h3":
        return <h3 className="h3">{children}</h3>;
      case "h3-italic":
        return <h3 className="h3-italic">{children}</h3>;
      case "h4":
        return <h4 className="h4">{children}</h4>;
      case "h5":
        return <h5 className="h5">{children}</h5>;
      case "h6":
        return <h6 className="h6">{children}</h6>;
    }
  };
  return getData(type, children);
}
