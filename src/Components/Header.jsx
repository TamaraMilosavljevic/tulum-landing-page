import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { NavigationLabel } from "./ui/NavigationLabel.jsx";

export default function Header() {
  const navigationMenu = [
    { label: "Home", href: "#hero-section", size: "large" },
    { label: "How it works", href: "#features", size: "large" },
    { label: "Benefits", href: "#benefits", size: "large" },
    { label: "FAQs", href: "#faq", size: "large" },
  ];
  return (
    <header
      className="w-full mx-0 sticky top-[4.3rem] flex flex-row items-center"
      style={{ backgroundColor: "" }}
    >
      <div className="w-full">
        <Logo />
      </div>
      <menu className="w-full flex-row mx-8">
        <ul
          className="flex flex-row text-2xl gap-8 list-none justify-center"
          style={{ color: "var(--secondary)" }}
        >
          {navigationMenu.map(({ label, href, size }) => (
            <NavigationLabel
              key={label}
              label={label}
              href={href}
              size={size}
            />
          ))}
        </ul>
      </menu>

      <div className="w-full flex flex-row box-border justify-end">
        <Button />
      </div>
    </header>
  );
}
