import { SectionTitle } from "./SectionTitle";
import Accordion from "./ui/Accordion";

export const Faq = () => {
  return (
    <section className="w-full flex flex-col gap-20 items-center justify-center">
      <div className="h-5px" id="faq"></div>
      <SectionTitle
        heading="Frequently Asked Questions"
        subheading="Answer your customer possible questions here, it will increase the conversion rate as well as support or chat requests."
      />
      <div className="w-full flex flex-1 w-full justify-center">
        <Accordion />
      </div>
    </section>
  );
};
