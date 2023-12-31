import Card, {
  HorizontalCard,
  OverlayCard,
  ToggleCard,
} from "../component/card/Card";

import "./Documentation.css";
const CardDoc = () => {
  return (
    <div className="docs-container">
      <h1>Cards</h1>
      <p>Cards display content and actions about a single subject.</p>
      <h2>Text only cards: </h2>
      <p>
        Vertically aligned cards, that include cards with an outline, or
        elevated cards which incorporate shadows and filled cards which add a
        background color to the card.
      </p>
      <div className="av-container">
        <Card type="outlined" heading={"Fall"}>
          Fall is wonderful.
        </Card>
        <Card type="elevated" heading={"Summer"}>
          Summer is for the beach.
        </Card>
        <Card type="filled" heading={"Winter"}>
          Winter is to hibernate.
        </Card>
      </div>
      <h2>Toggle cards: </h2>
      <p>Clicking on the cross will close the card.</p>
      <div className="av-container">
        <ToggleCard type={"outlined"} heading={"Fall"}>
          Fall, often referred to as the "season of mists and mellow
          fruitfulness," is a time of transition and natural splendor. As the
          long, lazy days of summer gradually yield to cooler temperatures, the
          world transforms into a breathtaking tapestry of colors.
        </ToggleCard>
        <ToggleCard type={"elevated"} heading={"Summer"}>
          Summer, a season of sun-kissed days and balmy nights, invites us to
          embrace the warmth of the sun, savor ice cream treats, and create
          cherished memories under clear blue skies.
        </ToggleCard>
        <ToggleCard type={"filled"} heading={"Winter"}>
          Winter transforms the world into a wonderland of glistening snow,
          where nature rests beneath a pristine blanket. It's a season for cozy
          fireside moments, steaming cups of cocoa, and the magic of snowflakes.
        </ToggleCard>
      </div>
      <h2>Cards with overlay: </h2>
      <p>
        Cards with an image and overlay text along with content description. The
        card sizes are relative to the image sizes.
      </p>
      <div className="av-container">
        <OverlayCard
          source={"https://i.postimg.cc/V6Kx4kwY/autumn.png"}
          name="overlay-img"
          overlayText={"Fall"}
          type={"outlined"}
        >
          Fall, often referred to as the "season of mists and mellow
          fruitfulness," is a time of transition and natural splendor. As the
          long, lazy days of summer gradually yield to cooler temperatures, the
          world transforms into a breathtaking tapestry of colors.
        </OverlayCard>
        <OverlayCard
          source={"https://i.postimg.cc/GpFrPR92/summer.jpg"}
          name="overlay-img"
          overlayText={"Fall"}
          type={"elevated"}
        >
          {" "}
          Fall, often referred to as the "season of mists and mellow
          fruitfulness," is a time of transition and natural splendor. As the
          long, lazy days of summer gradually yield to cooler temperatures, the
          world transforms into a breathtaking tapestry of colors.
        </OverlayCard>
        <OverlayCard
          source={"https://i.postimg.cc/7LkrZRXy/winter.jpg"}
          name="overlay-img"
          overlayText={"Fall"}
          type={"filled"}
        >
          {" "}
          Fall, often referred to as the "season of mists and mellow
          fruitfulness," is a time of transition and natural splendor. As the
          long, lazy days of summer gradually yield to cooler temperatures, the
          world transforms into a breathtaking tapestry of colors.
        </OverlayCard>
      </div>
      <h2>Horizontal cards</h2>
      <p>Cards where the content is aligned horizontally.</p>
      <div className="av-container">
        <HorizontalCard
          source={"https://i.postimg.cc/3wkvf0CR/vapor-three.jpg"}
          name="overlay-img"
        >
          Fall, often referred to as the "season of mists and mellow
          fruitfulness," is a time of transition and natural splendor. As the
          long, lazy days of summer gradually yield to cooler temperatures, the
          world transforms into a breathtaking tapestry of colors.
        </HorizontalCard>
      </div>
      <h2>Usage</h2>
      <h2>Text only cards</h2>
      <p>
        There are three different text only cards. Outlined, elevated and
        filled. Elevated, incorporates shadows behind the card, and filled cards
        have a colored background.
      </p>
      <h2>Overlay Card</h2>
      <p>
        Overlay cards include an image whose URL has to be provided via source,
        and an overlay heading which has to be provided using overlayText.
      </p>
    </div>
  );
};

export default CardDoc;
