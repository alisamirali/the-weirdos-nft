import React from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../../assets/Nfts/bighead-1.svg";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../..//assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../..//assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";
import img10 from "../../assets/Nfts/bighead.svg";
import ETH from "../../assets/icons8-ethereum-48.png";
import { useRaf } from "react-use";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const move = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(-100%);
}
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    margin-right: 0.1rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ img, number = 0, price = 0 }) => {
  // let play = (e) => {
  //   passRef.current.style.animationPlayState = "running";
  // };

  // let pause = (e) => {
  //   passRef.current.style.animationPlayState = "paused";
  // };

  return (
    // onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}
    <ImgContainer>
      <img src={img} alt="NFT Item" />

      <Details>
        <div>
          <span>Weirdos</span>
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  // const Row1Ref = useRaf(null);
  // const Row2Ref = useRaf(null);

  return (
    <Section id="showcase">
      <Row direction="none">
        <NftItem img={img1} number={550} price={2.2} />
        <NftItem img={img2} number={250} price={2.5} />
        <NftItem img={img3} number={620} price={2.6} />
        <NftItem img={img4} number={333} price={2.7} />
        <NftItem img={img5} number={461} price={2.8} />
      </Row>

      <Row direction="reverse">
        <NftItem img={img6} number={300} price={2.9} />
        <NftItem img={img7} number={150} price={3.0} />
        <NftItem img={img8} number={600} price={3.1} />
        <NftItem img={img9} number={890} price={3.2} />
        <NftItem img={img10} number={269} price={3.3} />
      </Row>
    </Section>
  );
};

export default Showcase;