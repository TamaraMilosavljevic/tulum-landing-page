import { SectionTitle } from "./SectionTitle";
import { BUTTON_SWITCH_TYPES } from "./Benefits";

// eslint-disable-next-line react/prop-types
export const BenefitsTitle = ({ selectedItem }) => {
  const hostTitle = {
    heading: "Host Benefits with Tulum",
    subheading:
      "Discover how Tulum transforms your pary expirience. Makes finding and hosting parties easy and fun. Here's how:",
  };

  const guestTitle = {
    heading: "Guest Benefits with Tulum",
    subheading:
      "Discover how Tulum transforms your pary expirience. Makes finding and hosting parties easy and fun. Here's how:",
  };

  const currentItem =
    selectedItem === BUTTON_SWITCH_TYPES.GUEST ? guestTitle : hostTitle;

  return (
    <div>
      <SectionTitle
        heading={currentItem.heading}
        subheading={currentItem.subheading}
      />
    </div>
  );
};
