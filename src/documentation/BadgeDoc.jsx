import Badge, { AvatarBadge } from "../component/badge/Badge";
import Avatar from "../component/avatar/Avatar";
import "./Documentation.css";

const BadgeDoc = () => {
  return (
    <div className="docs-container">
      <h1>Badge</h1>
      <p>
        The Badge component is a versatile visual element that adds context,
        information, and visual cues to your user interface. Whether you need to
        highlight important information, display notifications, or mark content,
        the Badge component is your go-to tool.
      </p>
      <h2>Normal badges:</h2>
      <p>
        Badges that can be used with three different icons to depict mails, chat
        messages and meetings.
      </p>
      <div className="av-container">
        <Badge icon="message" count={10} label={"mail"}></Badge>
        <Badge icon="chat" count={20} label={"chat"}></Badge>
        <Badge icon="meeting" count={1} label={"meet"}></Badge>
      </div>
      <h2>Avatar Badges: </h2>
      <p>
        Avatar badges can be used with avatars, to indicate the current status
        of a user
      </p>
      <ul>
        <li>Green: Online</li>
        <li>Yellow: Away</li>
        <li>Busy: Red</li>
        <li>Offline: Grey</li>
      </ul>
      <div className="av-container">
        <AvatarBadge type="online">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>
        <AvatarBadge type="away">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>
        <AvatarBadge type="busy">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>
        <AvatarBadge type="offline">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>
      </div>
      <h2>Usage</h2>
      <p>Normal badges can be used in the following way: </p>
      <ul>
        <li>{` <AvatarBadge type="online">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>`}</li>
        <li>{`<AvatarBadge type="away">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>`}</li>
        <li>{`<AvatarBadge type="busy">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>`}</li>
        <li>{`<AvatarBadge type="offline">
          <Avatar
            name={"urahara"}
            size={"medium"}
            source={"https://i.postimg.cc/RFVvwNfC/avatar.jpg"}
            type={"with-border"}
          />
        </AvatarBadge>`}</li>
      </ul>
      <p>
        Icon - takes three values, 'message', 'chat' and 'meeting'. The icons
        are rendered on the basis of these values.
      </p>
      <p>Count - takes the count value of the notification.</p>
      <p>
        Label - takes the label value, that will be printed below your icon.
      </p>
      <p>
        Your avatar component should be wrapped inside the avatar badge
        component.
      </p>
      <p>
        Type - takes in four values to determine the user's status. They are,
        'online', 'offline', 'busy' and 'away'.
      </p>
      <p>
        Please use the avatars on size, 'medium' for the best user experience.
      </p>
    </div>
  );
};

export default BadgeDoc;
