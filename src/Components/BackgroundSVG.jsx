import { BUTTON_SWITCH_TYPES } from "./Benefits";
import megaphone from "../assets/megaphone.svg";
import tickets from "../assets/tickets.svg";

// eslint-disable-next-line react/prop-types
const BackgroundSVG = ({ selectedItem }) => {
  const svgSrc =
    selectedItem === BUTTON_SWITCH_TYPES.HOST ? megaphone : tickets;

  return (
    <div className="absolute h-[32rem] w-full left-1/2 top-0">
      <img
        className="max-h-full"
        src={svgSrc}
        alt={`${
          selectedItem === BUTTON_SWITCH_TYPES.HOST ? "megaphone" : "tickets"
        }`}
      />
    </div>
  );
};

export default BackgroundSVG;
