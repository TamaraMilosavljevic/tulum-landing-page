export const Card = ({ name, quote, avatar }) => {
  return (
    <div
      className="w-[29rem] rounded-xl box-border py-4"
      style={{ backgroundColor: "var(--soft-primary)" }}
    >
      <div className="max-w-md flex flex-row items-center justify-start box-border">
        <div className="p-4 py-[1.2rem]">
          <img src={avatar} className="w-full h-full object-cover" />
        </div>
        <div className="w-2/3 flex flex-col justify-start gap-[0.5rem] align-top pr-4">
          <h3 className="text-gray-800">{name}</h3>
          <h6 className="">{quote}</h6>
        </div>
      </div>
    </div>
  );
};
