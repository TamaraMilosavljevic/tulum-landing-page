import { SectionTitle } from "./SectionTitle";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";
import { Card } from "./Card";

export const Reviews = () => {
  const reviewsList = [
    {
      name: "Alex M.",
      icon: "search",
      description:
        "Tulum makes finding parties so easy! I&#39;ve discovered amazing events I would&#39;ve never known about. The app is super user-friendly, and buying tickets with UICOINS is a breeze!",
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
    <section
      id="reviews"
      className="w-full flex flex-col gap-20 items-center justify-center"
    >
      <SectionTitle
        heading="Hear from Our Hosts and Guests"
        subheading="Their stories can help answer your questions and show you what to expect."
      />
      <div>
        <Card
          name="Alex M."
          quote="Tulum makes finding parties so easy! I&#39;ve discovered amazing events I would&#39;ve never known about. The app is super user-friendly, and buying tickets with UICOINS is a breeze!"
          avatar={avatar1}
        />
      </div>
    </section>
  );
};
