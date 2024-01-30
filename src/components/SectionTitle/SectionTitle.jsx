const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="flex flex-col gap-3 items-center mb-[48px] mt-[79px]">
      <h3 className="text-[#D99904] text-xl">{subHeading}</h3>
      <h1 className="text-[40px] border-y-2">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
