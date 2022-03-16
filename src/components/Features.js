import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBasket,
  faMap,
  faThumbsUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "../styles/base";
import { aboutSection } from "../config/aboutSection";

const FeaturesSection = styled.section`
  padding: 9.6rem 0 9.6rem 0;
`;

const FeaturesTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  display: block;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;

const FeaturesSubtitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 4.8rem;
  line-height: 1.05;
  margin-bottom: 3rem;
  text-align: center;
`;

const FeatureItemTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 2.5rem;
  line-height: 1.05;
  margin-bottom: 2rem;
  text-align: left;
  @media (max-width: 71em) {
    text-align: center;
  }
`;

const FeaturesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 4.2rem;
  @media (max-width: 71em) {
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
    margin: 2.1rem;
  }
`;

const Feature = styled.div`
  line-height: 1.5;
`;

const FeatureIconBox = styled.div`
  margin-bottom: 3.8rem;
`;

const FeatureTextBox = styled.div`
  font-size: 2rem;
`;

const Card = styled.div`
  padding: 9rem 4rem;
  border-radius: 0.8rem;
  @media (max-width: 71em) {
    padding: 4.2rem 5.2rem;
  }
`;

export default function Features({ theme }) {
  const getIcon = (iconTitle) => {
    switch (iconTitle) {
      case "star":
        return faStar;
      case "shopping":
        return faShoppingBasket;
      case "map":
        return faMap;
      case "thumbsUp":
        return faThumbsUp;
      case "phone":
        return faPhone;
      default:
        return faStar;
    }
  };
  return (
    <Container>
      <FeaturesSection id="about">
        <FeaturesTitle>{aboutSection.sectionTitle}</FeaturesTitle>
        <FeaturesSubtitle>{aboutSection.sectionSubTitle}</FeaturesSubtitle>
        <FeaturesBox>
          {aboutSection.firstFeature.included && (
            <Card>
              <Feature>
                <FeatureIconBox>
                  <FontAwesomeIcon
                    className="featureIcon"
                    color={theme.body}
                    icon={getIcon(aboutSection.firstFeature.icon)}
                    size="3x"
                  />
                </FeatureIconBox>
                <FeatureItemTitle>
                  {aboutSection.firstFeature.title}
                </FeatureItemTitle>
                <FeatureTextBox>
                  {aboutSection.firstFeature.description}
                </FeatureTextBox>
              </Feature>
            </Card>
          )}
          {aboutSection.secondFeature.included && (
            <Card>
              <Feature>
                <FeatureIconBox>
                  <FontAwesomeIcon
                    icon={getIcon(aboutSection.secondFeature.icon)}
                    className="featureIcon"
                    color={theme.body}
                    size="3x"
                  />
                </FeatureIconBox>
                <FeatureItemTitle>
                  {aboutSection.secondFeature.title}
                </FeatureItemTitle>
                <FeatureTextBox>
                  {aboutSection.secondFeature.description}
                </FeatureTextBox>
              </Feature>
            </Card>
          )}
          {aboutSection.secondFeature.included && (
            <Card>
              <Feature>
                <FeatureIconBox>
                  <FontAwesomeIcon
                    color={theme.body}
                    icon={getIcon(aboutSection.thirdFeature.icon)}
                    className="featureIcon"
                    size="3x"
                  />
                </FeatureIconBox>
                <FeatureItemTitle>
                  {aboutSection.thirdFeature.title}
                </FeatureItemTitle>
                <FeatureTextBox>
                  {aboutSection.thirdFeature.description}
                </FeatureTextBox>
              </Feature>
            </Card>
          )}
        </FeaturesBox>
      </FeaturesSection>
    </Container>
  );
}
