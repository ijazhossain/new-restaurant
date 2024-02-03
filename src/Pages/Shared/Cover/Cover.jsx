const Cover = ({ heading, subHeading, img }) => {
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
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-white flex flex-col items-center justify-center bg-black w-[50%] h-[50%] bg-opacity-50">
          <h1 className="text-[80px]">{heading}</h1>
          <p className="text-[24px] font-[600]">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
