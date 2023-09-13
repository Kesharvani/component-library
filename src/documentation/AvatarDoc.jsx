import React from "react";
import Avatar from "../component/avatar/Avatar";
export default function AvatarDoc() {
  return (
    <div className="docs-container">
      <h1>Avatars</h1>
      <p>
        The Avatar component is a visually appealing and versatile element
        designed to represent users, profiles, or entities in your web
        application. It adds a personal touch to your user interface and helps
        users identify with the content they interact with.
      </p>
      <h2>Key features:</h2>
      <ul>
        <li>
          Profile Images: Display user profile pictures, avatars, or images with
          ease. The Avatar component simplifies the process of rendering user
          images and ensures consistency in their presentation.
        </li>
      </ul>
      <h2>Normal avatars: </h2>
      <div className="avatar_container">
        <Avatar
          name={"Gautam"}
          size={"small"}
          source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
        />
        <Avatar
          name={"Gautam"}
          size={"medium"}
          source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
        />
        <Avatar
          name={"Gautam"}
          size={"large"}
          source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
        />
      </div>
      <h2>Usage</h2>
      <ul>
        <li>
          {`<Avatar
          name={"Gautam"}
          size={"small"}
          source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
        />`}
        </li>
        <li>
          {`<Avatar
          name={"Gautam"}
          size={"medium"}
          source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
        />`}
        </li>
        <li>
          {`<Avatar
          name={"Gautam"}
          size={"large"}
          source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
        />`}
        </li>
      </ul>

      <p>The avatar component consists of name, size, source attributes.</p>
      <p>
        Name and Source are the names you want to give to your avatar and the
        source image for the avatar respectively.
      </p>
      <p>Size can take three values, 'small', 'medium' and 'large'.</p>
    </div>
  );
}
