import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile, pc, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
  ${tablet({ height: "50vh" })}
  ${pc({ height: "80vh" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e0dfdf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${tablet({ height: "100%" })}
  ${pc({ height: "100%" })}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 10%;
`;

const Image = styled.img`
  height: 90%;
  ${tablet({ height: "100%" })}
  ${pc({ height: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  ${tablet({ fontSize: "20px" })}
  ${pc({ fontSize: "50px" })}
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  color: #444;
  font-weight: 500;
  letter-spacing: 1px;
  ${tablet({ fontSize: "10px", margin: "20px 0" })}
  ${pc({ margin: "20px 0" })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${tablet({ padding: "5px", fontSize: "10px" })}
  ${pc({ fontSize: "15px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
