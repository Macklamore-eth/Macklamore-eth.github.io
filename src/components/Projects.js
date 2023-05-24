import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/Projects.css";
import metad from "../assets/img/webSnap/metad.png";
import ERA from "../assets/img/webSnap/ERA.png";
import IncubEX from "../assets/img/webSnap/IncubEX.png";
import EventGo from "../assets/img/webSnap/EventGo.png";
import gigit from "../assets/img/webSnap/gigit.png";
import Metapool from "../assets/img/webSnap/Metapool.png";
import startup from "../assets/img/webSnap/startup.png";
import SuiteSavvy from "../assets/img/webSnap/SuiteSavvy.png";
import { useNavigate } from "react-router-dom";
import multisig from "../assets/img/webSnap/multisig.jpg";
import bank from "../assets/img/webSnap/bank.jpg";
import nft from "../assets/img/webSnap/nft.jpg";
import auction from "../assets/img/webSnap/auction.jpg";
import fund from "../assets/img/webSnap/fund.jpg";

export const Projects = () => {
  const navigate = useNavigate();
  const experience = [
    {
      title: "IncubEX",
      description: "Decentralized Exchange",
      imgUrl: IncubEX,
      link: "https://www.incubexchange.com/",
    },
    {
      title: "ERA",
      description: "NFT Minting Website",
      imgUrl: ERA,
      link: "http://nftera.site/",
    },
    {
      title: "3MetaD",
      description: "GameFi % NFT Marketplace",
      imgUrl: metad,
      link: "https://www.3metad.com/",
    },
    {
      title: "Meta Pool",
      description: "Staking and Yeild Farm",
      imgUrl: Metapool,
      link: "https://www.nftsmetapool.com/home",
    },
  ];
  const projects = [
    {
      title: "GigIT",
      description: "Techie Hire Platform",
      imgUrl: gigit,
      link: "https://gig-it.vercel.app/",
    },
    {
      title: "Suite Savvy",
      description: "Booking and Reservation App",
      imgUrl: SuiteSavvy,
      link: "https://suite-savvy.vercel.app/",
    },
    {
      title: "Startup Sphere",
      description: "DeFi Crowdfunding Platform",
      imgUrl: startup,
      link: "https://startup-sphere.vercel.app/",
    },
    {
      title: "Event Go",
      description: "DeFi Ticketing Platform",
      imgUrl: EventGo,
      link: "https://event-go.vercel.app/",
    },
  ];
  const contract = [
    {
      title: "Multi Signature Wallet",
      description: "A Multi Signature Wallet",
      imgUrl: multisig,
      link: "https://github.com/Flame-eth/Multiparty-Ethereum-Wallet",
    },
    {
      title: "Decentralized Bank",
      description: "DeFi for purchase, sale and exchange of crypto assets",
      imgUrl: bank,
      link: "https://github.com/Flame-eth/Decentralized-Bank-DApp",
    },
    {
      title: "Auction Contract",
      description: "DeFi for bidding and auctioning",
      imgUrl: auction,
      link: "https://github.com/Flame-eth/Online-Auction-Smart-Contract",
    },
    {
      title: "Fundraiser Contract",
      description: "DeFi for crowd fundraising",
      imgUrl: fund,
      link: "https://github.com/Flame-eth/Fundraiser-Smart-Contract",
    },
    {
      title: "Custom NFT Generator",
      description: "Mining and minting of NFTs",
      imgUrl: nft,
      link: "https://github.com/Flame-eth/Sample-NFT-Collectible-ERC-721",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Work Experience and Projects</h2>
                  <p>
                    I have worked on a number of projects, both personal and
                    professional. Here are a few of them.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link className="tabs" eventKey="first">
                          Work Experience
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="tabs" eventKey="second">
                          Sample Projects
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="tabs" eventKey="third">
                          Smart Contracts
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {experience.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {contract.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
