import { LiIcon } from "./LiIcon";
import mockUp from "../assets/smartmockup.png";
import { SectionTitle } from "./SectionTitle";

export const Features = () => {
  return (
    <section
      id="features"
      className="w-full flex flex-col gap-20 items-center justify-center"
    >
      <SectionTitle
        heading="How Tulum Works"
        subheading="Discover how Tulum transforms your pary expirience. Makes finding and
hosting parties easy and fun. Here&#39;s how:"
      />
      <div className="w-full flex flex-row flex-wrap max-w-7xl justify-between lg:flex-nowrap ">
        <div className="w-72 m-2 flex flex-col gap-24 items-right">
          <LiIcon
            leftAlign
            name="Map"
            icon="map"
            description="Explore and find parties happening around you with our interactive map."
          />
          <LiIcon
            leftAlign
            name="Tickets"
            icon="tickets"
            description="Easily manage and keep track of all your purchased tickets in one place."
          />
        </div>
        <div>
          <img src={mockUp} />
        </div>
        <div className="w-72 m-2 flex flex-col gap-24 items-left">
          <LiIcon
            name="Hosting"
            icon="hosting"
            description="Plan and organize your own parties with our user-friendly hosting interface."
          />
          <LiIcon
            name="Account"
            icon="userIcon"
            description="Customize your unique party experience with your personal Tulum account."
          />
        </div>
      </div>
    </section>
  );
};
