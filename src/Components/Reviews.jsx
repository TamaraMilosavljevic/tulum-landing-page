import { SectionTitle } from "./SectionTitle";
import { MagicLoop } from "./ui/MagicLoop";

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="w-full flex flex-col gap-20 items-center justify-center"
    >
      <SectionTitle
        heading="Hear from Our Hosts and Guests"
        subheading="Their stories can help answer your questions and show you what to expect."
      />
      <div className="width=device-width">
        <MagicLoop />
      </div>
    </section>
  );
};
