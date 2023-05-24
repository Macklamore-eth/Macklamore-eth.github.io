import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import javascript from "../assets/img/javascript.svg";
import typescript from "../assets/img/typescript.svg";
import solidity from "../assets/img/solidity.svg";
import react from "../assets/img/react.svg";
import nodejs from "../assets/img/nodejs.svg";
import express from "../assets/img/express.svg";
import mongodb from "../assets/img/mongodb.svg";
import aws from "../assets/img/aws.svg";
import evm from "../assets/img/evm.svg";
import ethereum from "../assets/img/ethereum.png";
import ether from "../assets/img/ether.svg";
import html5 from "../assets/img/html5.svg";
import css3 from "../assets/img/css3.svg";
import git from "../assets/img/git.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <p>
                My tech stack is a combination of the following technologies:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={solidity} alt="Image" />
                  <h5>Solidity</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React.Js</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node.Js</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={aws} alt="Image" />
                  <h5>AWS</h5>
                </div>
                <div className="item">
                  <img src={evm} alt="Image" />
                  <h5>EVM</h5>
                </div>
                <div className="item">
                  <img src={ether} alt="Image" />
                  <h5>Truffle</h5>
                </div>
                <div className="item">
                  <img src={ether} alt="Image" />
                  <h5>Hardhat</h5>
                </div>
                <div className="item">
                  <img src={ether} alt="Image" />
                  <h5>Web3.Js</h5>
                </div>
                <div className="item">
                  <img src={ether} alt="Image" />
                  <h5>Ether.Js</h5>
                </div>
                <div className="item">
                  <img src={html5} alt="Image" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css3} alt="Image" />
                  <h5>CSS 3</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
