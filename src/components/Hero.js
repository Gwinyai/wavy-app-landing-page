import mockup from "../img/mockup.png";
import styled from "styled-components";
import blob from "../img/blob.svg";
import googlebadge from "../img/googlebadge.svg";
import appstorebadge from "../img/appstorebadge.svg";
import { heroSection } from "../config/heroSection";
import classNames from "classnames";

const HeroSection = styled.section`
  padding: 9.6rem 0 9.6rem 0;
  position: relative;
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.headerText};
  font-weight: 600;
  letter-spacing: -0.5px;
  font-size: 7.2rem;
  line-height: 1.05;
  margin-bottom: 6.2rem;
  span {
    color: ${({ theme }) => theme.tertiary};
  }
`;

const HeroWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
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

const HeroBox = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 4.8rem 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8rem;
  @media (max-width: 71em) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
    text-align: center;
  }
`;

const HeroTextBox = styled.div`
  color: ${({ theme }) => theme.headerText};
  @media (max-width: 71em) {
    margin-top: 6rem;
    text-align: center;
  }
`;

const HeroDescription = styled.p`
  color: ${({ theme }) => theme.headerText};
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const HeroImage = styled.img`
  width: 100%;
  @media (max-width: 71em) {
    width: 80%;
  }
`;

const HeroImageBox = styled.div`
  background-image: url(${blob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: ${(props) => (!props.justifyCenter ? "center" : "left")};
  gap: 2rem;
  .halfWidth {
    text-align: left;
    width: 50%;
  }
  @media (max-width: 71em) {
    justify-content: ${(props) => (props.justifyCenter ? "center" : "left")};
    .rightAlign {
      text-align: right;
    }
    .leftAlign {
      text-align: left;
    }
    .threeQuarterWidth {
      width: 30%;
    }
    .halfWidth {
      text-align: center;
      width: 40%;
    }
  }
  @media (max-width: 48em) {
    .threeQuarterWidth {
      width: 40%;
    }
  }
`;

const HeroButtonImg = styled.img`
  width: 100%;
  height: auto;
`;

const HeroButton = styled.a`
  width: 100%;
  &,
  &:link,
  &:visited {
    cursor: pointer;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroBox>
        <HeroTextBox>
          <HeroTitle>{heroSection.headingText}</HeroTitle>
          <HeroDescription>{heroSection.descriptionText}</HeroDescription>
          <HeroButtons
            justifyCenter={
              heroSection.appStoreButton.include &&
              heroSection.playStoreButton.include
            }
          >
            {heroSection.appStoreButton.include && (
              <HeroButton
                href={heroSection.appStoreButton.url}
                className={classNames({
                  rightAlign:
                    heroSection.appStoreButton.include &&
                    heroSection.playStoreButton.include,
                  threeQuarterWidth:
                    heroSection.appStoreButton.include &&
                    heroSection.playStoreButton.include,
                  halfWidth:
                    heroSection.appStoreButton.include &&
                    !heroSection.playStoreButton.include,
                })}
              >
                <HeroButtonImg src={appstorebadge} />
              </HeroButton>
            )}
            {heroSection.playStoreButton.include && (
              <HeroButton
                href={heroSection.appStoreButton.url}
                className={classNames({
                  leftAlign:
                    heroSection.appStoreButton.include &&
                    heroSection.playStoreButton.include,
                  threeQuarterWidth:
                    heroSection.appStoreButton.include &&
                    heroSection.playStoreButton.include,
                  halfWidth:
                    !heroSection.appStoreButton.include &&
                    heroSection.playStoreButton.include,
                })}
              >
                <HeroButtonImg src={googlebadge} />
              </HeroButton>
            )}
          </HeroButtons>
        </HeroTextBox>
        <HeroImageBox>
          <HeroImage src={mockup} alt="Mockup" />
        </HeroImageBox>
      </HeroBox>
      <HeroWave>
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
      </HeroWave>
    </HeroSection>
  );
}
