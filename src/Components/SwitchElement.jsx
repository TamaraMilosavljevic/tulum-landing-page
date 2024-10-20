import { SwitchButton } from "./SwitchButton";

const BUTTON_SWITCH_TYPES = {
  GUEST: "GUEST",
  HOST: "HOST",
};

export const SwitchElement = ({ selectedButton, onSelect }) => {
  // const [selectedButton, setSelectedButton] = useState(
  //   BUTTON_SWITCH_TYPES.GUEST
  // );

  return (
    <div
      style={{ backgroundColor: "var(--soft-primary)" }}
      className="flex flex-row h-50 px-1 py-2 box-border rounded-3xl"
    >
      {Object.values(BUTTON_SWITCH_TYPES).map((item) => (
        <SwitchButton
          key={item}
          selected={item === selectedButton}
          onClick={onSelect}
          label={item}
        />
      ))}
    </div>
  );
};
