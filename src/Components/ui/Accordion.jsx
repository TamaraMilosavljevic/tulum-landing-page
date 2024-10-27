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
        "No, in order to fully access and enjoy all of Tulum's features, such as browsing events, purchasing tickets with UICOINS, and organizing your own parties, you'll need to create an account.",
    },
    {
      question: "Is there a cost to use the app?",
      answer:
        "All your transactions are free, and you can purchase UICOINS with real money to use them for ticket purchases.",
    },
    {
      question: "How do I find groups or people with similar interests?",
      answer:
        "You can find groups and people with similar interests by browsing through the various categories and subcategories available on the app. You can also use the search bar to find specific groups or people.",
    },
    {
      question: "Can I create private events?",
      answer:
        "Yes, you can create private events by selecting the private event option when creating an event. This will make the event only visible to you and the people you invite.",
    },
    {
      question: "How can I delete my account?",
      answer:
        "You can delete your account by going to the settings page and selecting the delete account option. Please note that this action is irreversible and will permanently delete your account and all associated data.",
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
