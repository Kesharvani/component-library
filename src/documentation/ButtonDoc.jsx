import {
  Button,
  Fab,
  IconButton,
  LinkButton,
} from "../component/button/Button";
import "./Documentation.css";
const ButtonDoc = () => {
  return (
    <div className="docs-container">
      <h1>Buttons</h1>
      <p>Buttons let people take action and make choices with one tap.</p>
      <p>
        Use different button types on the same screen to direct user attention.
      </p>
      <h2>Common buttons: </h2>
      <div className="bt-container">
        <Button type="outlined-btn">Outlined</Button>
        <Button type="elevated-btn">Elevated</Button>
        <Button type="filled-btn">Filled</Button>
      </div>
      <h2>Link buttons:</h2>
      <p>
        These buttons will help you navigate to any location you want. Either
        within your application, or any other URL.
      </p>
      <div className="bt-container">
        <LinkButton type="outlined-btn" destination={"https://gooogle.com"}>
          Google
        </LinkButton>
        <LinkButton type="elevated-btn" destination={"/"}>
          Home page
        </LinkButton>
        <LinkButton type="filled-btn" destination={"/components"}>
          Components
        </LinkButton>
      </div>
      <h2>Icon buttons: </h2>
      <p>
        These are buttons that include icons for indication and better user
        experience.
      </p>
      <div className="bt-container">
        <IconButton type={"outlined-btn"} icon={"mail"}>
          Icon button
        </IconButton>
        <IconButton type={"filled-btn"} icon={"logout"}>
          Logout
        </IconButton>
        <IconButton type={"elevated-btn"} icon={"draft"}>
          New
        </IconButton>
        <IconButton type={"filled-btn"} icon={"add"}>
          Add
        </IconButton>
      </div>
      <h2>Floating Action Buttons: </h2>
      <p>
        Floating action buttons help users take primary actions. Use a FAB for
        the most common or important action on a screen.{" "}
      </p>
      <div className="bt-container">
        <Fab icon={"add"} size={30}></Fab>
        <Fab icon={"logout"} size={40}></Fab>
      </div>
      <h2>Usage </h2>
      <h2>Common Buttons:</h2>
      <p>Common buttons can be used in the following ways.</p>
      <p>
        Type: determines the type of the button. Takes in three values -
        "outlined-btn", "elevated-btn" and "filled-btn". These three types will
        remain a constant throughout all the button components.
      </p>
      <ul>
        <li>{`<Button type="outlined-btn">Outlined</Button>`}</li>
        <li>{`<Button type="elevated-btn">Elevated</Button>`}</li>
        <li>{`<Button type="filled-btn">Filled</Button>`}</li>
      </ul>
      <h2>Link buttons:</h2>
      <p>
        Link buttons will have the same "type" values. Destination can be any
        URL you want the button to point to.
      </p>
      <ul>
        <li>{` <LinkButton type="outlined-btn" destination={"https://gooogle.com"}> Google</LinkButton>`}</li>
        <li>{`<LinkButton type="elevated-btn" destination={"/"}>Home page</LinkButton>`}</li>
      </ul>
      <h2>Icon buttons:</h2>
      <p>
        Icon buttons introduce the <i>icon</i> attribute. The values of icon can
        be, "mail", "logout", "add" and "draft".
      </p>
      <p>Based on the values of icon, the button generates a suitable icon.</p>
      <ul>
        <li>{` <IconButton type={"outlined-btn"} icon={"mail"}>
          Icon button
        </IconButton>`}</li>
        <li>{` <IconButton type={"filled-btn"} icon={"logout"}>
          Logout
        </IconButton>`}</li>
      </ul>
      <h2>Floating Action Buttons:</h2>
      <p>
        FABs have the icon attribute, just like the icon buttons do. But also
        introduce a 'size' attribute that helps determine the size of the icon.
      </p>
      <p>
        <ul>
          <li>{` <Fab icon={"add"} size={30}></Fab>`}</li>
          <li>{`<Fab icon={"logout"} size={40}></Fab>`}</li>
        </ul>
      </p>
    </div>
  );
};

export default ButtonDoc;
