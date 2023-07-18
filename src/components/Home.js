import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      {/* <Section 
        title = "Experience Tesla"
        description = "Schedule Demo Drive"
        backgroundImg = "model-3.jpg"
        leftBtnText = "Demo Drive"
      /> */}
      
      <Section
        title="Model 3"
        description1="Starting at $32,740"
        description2="After Federal Tax Credit"
        backgroundImg="model-3.jpg"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        description1="Starting at $40,240"
        description2="After Federal Tax Credit"
        backgroundImg="model-y.jpg"
        leftBtnText="Explore Inventory"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model S"
        description1="Explore Inventory"
        description2=""
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model X"
        description1="Explore Inventory"
        description2=""
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description1="Lowest Cost Solar Panels in America"
        description2=""
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        description1="Produce Clean Energy From Your Roof"
        description2=""
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Powerwall"
        description1=""
        description2=""
        backgroundImg="powerwall.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description1=""
        description2=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
`;


