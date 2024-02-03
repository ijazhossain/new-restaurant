import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../hooks/usemenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionCover from "../Shared/SectionCover/SectionCover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupsImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Restaurant | Menu</title>
      </Helmet>
      <Cover
        heading="OUR MENU"
        subHeading="Would you like to try a dish?"
        img={menuImg}
      />
      <SectionTitle heading="TODAY'S OFFER" subHeading="---Don't miss---" />
      <MenuCategory items={offered} />
      {/* desserts */}
      <SectionCover
        heading="DESSERTS"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertImg}
      />
      <MenuCategory items={desserts} />
      {/* pizza */}
      <SectionCover
        heading="PIZZA"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzaImg}
      />
      <MenuCategory items={pizza} />
      {/* salad */}
      <SectionCover
        heading="SALAD"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladImg}
      />
      <MenuCategory items={salad} />
      {/* soups */}
      <SectionCover
        heading="SOUPS"
        subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupsImg}
      />
      <MenuCategory items={soups} />
    </div>
  );
};

export default Menu;
