export const Card = ({ name, quote, avatar }) => {
  return (
    <div
      className="h-48 rounded-xl flex flex-row items-center justify-start mr-4 py-4 px-6"
      style={{ backgroundColor: "var(--soft-primary)" }}
    >
      <div className="p-4 py-[1.2rem]">
        <img src={avatar} className="w-full h-full object-cover" />
      </div>
      <div className="w-2/3 flex flex-col gap-3">
        <h3 className="">{name}</h3>
        <h6 className="text-s">{quote}</h6>
      </div>
    </div>
  );
};
