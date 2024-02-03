const SectionCover = ({ heading, subHeading, img }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        height: "450px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <div className="text-white flex flex-col items-center justify-center bg-black w-[50%] h-[50%] bg-opacity-50 px-8">
          <h1 className="text-[45px]">{heading}</h1>
          <p className="text-[16px] font-[600] text-center">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionCover;
