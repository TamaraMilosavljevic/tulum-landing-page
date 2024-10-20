import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
// Accordion Item Component
// eslint-disable-next-line react/prop-types
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-slate-200">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-8 p-8 rounded-2xl text-slate-800 bg-primary active:bg-selected"
      >
        <span className="text-2xl">{question}</span>
        <span
          className={`text-slate-300 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon color="white" width="2rem" height="2rem" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ maxHeight: isOpen ? `${300}px` : "0" }}
      >
        <div className="text-start px-8 py-5 text-2xl text-slate-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

// Main Accordion Component
const Accordion = () => {
  const items = [
    {
      question: "Can I use the app without creating an account?",
      answer:
        "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
    },
    {
      question: "Is there a cost to use the app?",
      answer:
        "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
    },
    {
      question: "How do I find groups or people with similar interests?",
      answer:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
    {
      question: "Can I create private events?",
      answer:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
    {
      question: "How can I delete my account?",
      answer:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-stretch text-center gap-6 py-8">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
