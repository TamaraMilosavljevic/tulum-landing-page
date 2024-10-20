import tickets from "../assets/tickets.svg";
import megaphone from "../assets/megaphone.svg";
import { SwitchElement } from "./SwitchElement";
import { LiIcon } from "./LiIcon";
import { SectionTitle } from "./SectionTitle";
import { useState } from "react";

const BUTTON_SWITCH_TYPES = {
  GUEST: "GUEST",
  HOST: "HOST",
};

export const Benefits = () => {
  const [isHost, setIsHost] = useState(false);
  const [selectedButton, setSelectedButton] = useState(
    BUTTON_SWITCH_TYPES.GUEST
  );

  const handleSelect = (newSelectedButton) => {
    setSelectedButton(newSelectedButton);
  };

  const benefitsListGuest = [
    {
      name: "Discover Exciting Parties",
      icon: "search",
      description:
        "Use the map to find parties that match your interests in your area. Easily purchase and manage your tickets within the app.",
    },
    {
      name: "Connect with Like-minded People",
      icon: "community",
      description:
        "Find and interact with other party-goers who share your interests. Check their relationship status and make new friend and connections.",
    },
    {
      name: "Social Media Integration",
      icon: "share",
      description:
        "Connect your Tulum account with platforms like TikTok. Share your party experiences and grow your social network, making every event memorable.",
    },
  ];
  const benefitsListHost = [
    {
      name: "Earn Money with Unicoins",
      icon: "search",
      description:
        "As a host, earn Unicoins for every ticket sold to your events. Convert these Unicoins into real money, making your hosting efforts profitable.",
    },
    {
      name: "Simple and Efficient Hosting",
      icon: "community",
      description:
        "Use our intuitive interface to plan and manage your events seamlessly. Track ticket sales, manage guest list, and ensure a smooth event experience.",
    },
    {
      name: "Build Your Reputation",
      icon: "share",
      description:
        "Gain raiting and reviews from your guests, helping you build a solid reputation as a top host. The better your events, the more you earn and grow your following.",
    },
  ];

  return (
    <section
      id="benefits"
      className=" min-h-[500px] w-full mx-8 flex flex-col text-start border-solid border-gray-950	gap-16 flex-wrap lg:flex-nowrap"
    >
      <div className="flex flex-col items-center justify-center gap-16">
        <SwitchElement onSelect={handleSelect} />
        <div>
          <SectionTitle
            heading="Guest Benefits with Tulum"
            subheading="Discover how Tulum transforms your pary expirience. Makes finding and hosting parties easy and fun. Here&#39;s how:"
          />
        </div>
      </div>
      <div className="h-full flex flex-col gap-10 text-left justify-start relative index-40">
        {benefitsListGuest.map(({ name, description, icon }) => (
          <LiIcon
            key={icon}
            name={name}
            icon={icon}
            description={description}
          />
        ))}
        <div className="absolute w-1/2 object-fit h-full left-1/2 top-0">
          <img
            src={`${isHost ? tickets : megaphone}`}
            alt="floating watermark"
          />
        </div>
      </div>
    </section>
  );
};
