import tickets from "../assets/tickets.svg";
import { SwitchElement } from "./SwitchElement";
import { LiIcon } from "./LiIcon";
import { SectionTitle } from "./SectionTitle";

export const Benefits = () => {
  const benefitsList = [
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

  return (
    <section className=" min-h-[500px] w-full mx-8 flex flex-col text-start border-solid border-gray-950	gap-16 flex-wrap lg:flex-nowrap">
      <div
        id="hero-section"
        className="flex flex-col items-center justify-center gap-16"
      >
        <SwitchElement />
        <div>
          <SectionTitle
            heading="Guest Benefits with Tulum"
            subheading="Discover how Tulum transforms your pary expirience. Makes finding and hosting parties easy and fun. Here&#39;s how:"
          />
        </div>
      </div>
      <div className="h-full flex flex-col gap-10 text-left justify-start relative index-40">
        {benefitsList.map(({ name, description, icon }) => (
          <LiIcon
            key={icon}
            name={name}
            icon={icon}
            description={description}
          />
        ))}
        <div className="absolute w-1/2 object-fit h-full left-1/2 top-0">
          <img src={tickets} alt="floating watermark with tickets" />
        </div>
      </div>
    </section>
  );
};
