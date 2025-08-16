import React from "react";
import HomeMain from "../Views/Home/HomeMain";
const Home = () => {
  return <HomeMain />;
};
// Memoize the component to prevent unnecessary re-renders and improve performance
export default React.memo(Home);
