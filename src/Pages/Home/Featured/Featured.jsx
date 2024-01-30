import featureImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="feature-bg my-20">
      <div className=" bg-black bg-opacity-50 text-white pt-2 ">
        <SectionTitle
          subHeading={"-----Check It Out-----"}
          heading="FOR OUR MENU"
        ></SectionTitle>
        <div className="flex items-center  justify-between">
          <div>
            <img className="px-16 py-12" src={featureImg} alt="feature image" />
          </div>
          <div className="space-y-5 ">
            <p>Aug20, 2029</p>
            <p>Where can I get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit dolores distinctio autem, iste odio atque rem ut
              iure laborum? Magnam, vero itaque. Delectus excepturi aperiam
              sunt, ab voluptas perferendis!
            </p>
            <button className="btn btn-outline text-white px-10 border-0 border-b-4 ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
