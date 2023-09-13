export const dynamicHelper = (
  selectedComponent,
  Avatar,
  Alert,
  Badge,
  Button,
  Heading,
  Card,
  Text,
  Image
) => {
  switch (selectedComponent) {
    case "Avatar":
      return Avatar;
    case "Alert":
      return Alert;
    case "Badge":
      return Badge;
    case "Button":
      return Button;
    case "Heading":
      return Heading;
    case "Card":
      return Card;
    case "Text":
      return Text;
    case "Image":
      return Image;
    default:
      return "";
  }
};

export const components = [
  "Avatar",
  "Alert",
  "Badge",
  "Button",
  "Heading",
  "Card",
  "Text",
  "Image",
];
