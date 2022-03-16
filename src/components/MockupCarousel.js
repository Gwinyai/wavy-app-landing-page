import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import LightenDarkenColor from "../utility/LightenDarken";
import blob from "../img/blob.svg";
import { aboutSection } from "../config/aboutSection";

const SliderWrapper = styled.div`
  overflow: hidden;
  border-radius: 30px;
`;

export default function MockupCarousel({ theme }) {
  const slider = React.createRef();

  const demoSlides = aboutSection.carousel.slides;

  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrow: false,
  };

  const ArrowLeft = styled.div`
    display: flex;
    align-items: center;
  `;

  const ArrowRight = styled.div`
    display: flex;
    align-items: center;
  `;

  const ArrowButton = styled.a`
    &,
    &:link,
    &:visited {
      display: inline-block;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 2rem;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
    }
    &:hover,
    &:active {
      background-color: ${({ theme }) =>
        LightenDarkenColor(theme.primary, -30)};
    }
  `;

  const PhoneMockup = styled.div`
    background-image: url(${blob});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 3.2rem 3.2rem;
  `;

  const TopWave = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 150px;
    }
    .shapeFill {
      fill: ${({ theme }) => theme.body};
    }
  `;

  const CarouselBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.6rem;
  `;

  const SectionWrapper = styled.div`
    position: relative;
    background: linear-gradient(
      ${({ theme }) => theme.primary},
      ${({ theme }) => LightenDarkenColor(theme.secondary, -20)}
    );
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 140rem;
    padding: 0 3.2rem;
    margin: 0 auto;
    @media (max-width: 71em) {
      grid-template-columns: 1fr;
    }
  `;

  const AboutBox = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 71em) {
      margin-top: 10.2rem;
      justify-content: center;
      padding: 1.2rem;
      margin-bottom: 4.2rem;
    }
  `;

  const FeaturesTitle = styled.h2`
    color: ${({ theme }) => theme.headerText};
    display: block;
    font-size: 1.7rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    letter-spacing: 0.75px;
    @media (max-width: 71em) {
      text-align: center;
    }
  `;

  const FeaturesSubTitle = styled.h2`
    color: ${({ theme }) => theme.headerText};
    font-weight: 700;
    letter-spacing: -0.5px;
    font-size: 4.8rem;
    line-height: 1.05;
    margin-bottom: 6rem;
    @media (max-width: 71em) {
      text-align: center;
    }
  `;

  const FeatureDescription = styled.div`
    color: ${({ theme }) => theme.headerText};
    font-size: 2rem;
    line-height: 1.6;
  `;

  const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
    row-gap: 1.5rem;
    @media (max-width: 71em) {
      grid-template-columns: 2fr 8fr;
      row-gap: 2rem;
    }
  `;

  return (
    <>
      <SectionWrapper id="features">
        <TopWave>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shapeFill"
            ></path>
          </svg>
        </TopWave>
        <Grid>
          <AboutBox>
            <div>
              <FeaturesTitle>{aboutSection.carousel.title}</FeaturesTitle>
              <FeaturesSubTitle>
                {aboutSection.carousel.subtitle}
              </FeaturesSubTitle>
              <FeaturesGrid>
                {aboutSection.carousel.features.map((feature) => {
                  return (
                    <>
                      <FontAwesomeIcon
                        color={theme.body}
                        icon={faCheckCircle}
                        size="3x"
                      />
                      <FeatureDescription>{feature}</FeatureDescription>
                    </>
                  );
                })}
              </FeaturesGrid>
            </div>
          </AboutBox>
          <CarouselBox>
            <ArrowLeft>
              <ArrowButton onClick={() => slider.current.slickPrev()}>
                <FontAwesomeIcon color="#FFF" icon={faArrowLeft} size="2x" />
              </ArrowButton>
            </ArrowLeft>
            <PhoneMockup>
              <div className="device device-iphone-x">
                <div className="device-frame">
                  <SliderWrapper>
                    <Slider {...settings} ref={slider}>
                      {demoSlides.map((slide) => (
                        <div key={slide.name}>
                          <img src={slide.src} />
                        </div>
                      ))}
                    </Slider>
                  </SliderWrapper>
                </div>
                <div className="device-stripe"></div>
                <div className="device-header"></div>
                <div className="device-sensors"></div>
                <div className="device-btns"></div>
                <div className="device-power"></div>
              </div>
            </PhoneMockup>
            <ArrowRight>
              <ArrowButton onClick={() => slider.current.slickNext()}>
                <FontAwesomeIcon color="#FFF" icon={faArrowRight} size="2x" />
              </ArrowButton>
            </ArrowRight>
          </CarouselBox>
        </Grid>
      </SectionWrapper>
    </>
  );
}
