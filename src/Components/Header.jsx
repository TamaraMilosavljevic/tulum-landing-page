import Logo from "./Logo.jsx";
import Button from "./Button.jsx";

export default function Header() {
  return (
    <header className="w-full mx-0 sticky top-0 flex flex-row items-center" style={{backgroundColor: '#f8f7ff'}}>
      <div className="w-full">
        <Logo />
      </div>
        <menu className="w-full flex-row mx-8">
          <ul className="flex flex-row text-2xl gap-8 list-none justify-stretch" style={{color:"var(--secondary)"}}>
            <li>Home</li>
            <li>How it works</li>
            <li>Benefits</li>
            <li>FAQs</li>
          </ul>
        </menu>
     
      <div className="w-full flex flex-row box-border justify-end">
      <Button />
      </div>
    </header>
  )
}