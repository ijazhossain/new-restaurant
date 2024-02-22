import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/usemenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  //   console.log(category);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
        img={orderImg}
      />
      <Tabs
        className="text-center"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab item={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
