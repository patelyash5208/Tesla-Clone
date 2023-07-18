import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
// import aerrow from "../images/down-arrow.svg";

const Section = ({
  title,
  description1,
  description2,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description1}</p>
          <p>{description2}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {/* <DownArrow src={aerrow} /> */}
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100wh;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) =>
    `url(${require(`../images/${props.bgImage}`)})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: rgba(244,244,244, 0.8);
  height: 40px;
  width: 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.95;
  font-size: 16px;
  cursor: pointer;
  margin-bottom : 70px;
  margin-left : 8px;
  margin-right : 8px;
`;

const RightButton = styled(LeftButton)`
  background: rgba(23, 26, 32, 0.65);
  opacity: 0.6;
  color: white;
`;

// const DownArrow = styled.img`
//   height: 40px;
//   animation: animateDown infinite 1.5s;
//   overflow-x: hidden;
//   margin-bottom: 3px;
// `;

const Buttons = styled.div``;
