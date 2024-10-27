import { SectionTitle } from "./SectionTitle";
import { MagicLoop } from "./ui/MagicLoop";

export const Reviews = () => {
  return (
    <section className="w-full flex flex-col gap-20 items-center justify-center">
      <div className="h-5px" id="reviews"></div>

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
