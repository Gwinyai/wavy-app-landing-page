import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { pricingSection } from "../config/pricingSection";

const PricingSection = styled.section`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  padding: 9.6rem;
`;

const PricingTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  display: block;
  font-size: 1.7rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
  text-align: center;
`;

const PricingSubTitle = styled.h2`
  color: #${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 4.8rem;
  line-height: 1.05;
  margin-bottom: 8.2rem;
  text-align: center;
`;

const PricingDetails = styled.aside`
  color: #${({ theme }) => theme.text};
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
`;

const PricingBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 4rem;
  @media (max-width: 59em) {
    flex-direction: column;
  }
`;

const PlanHeader = styled.header`
  text-align: center;
  margin-bottom: 4.8rem;
`;

const PlanName = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.75;
  margin-bottom: 3.2rem;
`;

const PlanPrice = styled.p`
  font-size: 6.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.6rem;
  span {
    font-size: 3rem;
    font-weight: 500;
    margin-right: 0.8rem;
  }
`;

const PlanComplete = styled.div`
  border-radius: 1.1rem;
  width: 75%;
  justify-self: end;
  border: 2px solid #eeeeee;
  padding: 4.6rem;
  position: relative;
  overflow: hidden;
  &::after {
    content: "Best value";
    position: absolute;
    top: 6%;
    right: -18%;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 700;
    background-color: #ffd43b;
    padding: 0.8rem 8rem;
    transform: rotate(45deg);
  }
  @media (max-width: 59em) {
    display: inline;
    align-self: center;
    width: auto;
    padding: 10.2rem;
  }
`;

const PlanText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
`;

const PlanList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PlanItem = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.2;
`;

const Plan = styled.div`
  border-radius: 1.1rem;
  width: 75%;
  justify-self: end;
  border: 2px solid #eeeeee;
  padding: 4.6rem;
  @media (max-width: 59em) {
    display: inline;
    align-self: center;
    width: auto;
    padding: 10.2rem;
  }
`;

export default function Pricing() {
  return (
    <>
      <PricingSection>
        <PricingTitle>{pricingSection.sectionTitle}</PricingTitle>
        <PricingSubTitle>{pricingSection.sectionSubTitle}</PricingSubTitle>
        <PricingBox>
          {pricingSection.plan1.included && (
            <Plan>
              <PlanHeader>
                <PlanName>{pricingSection.plan1.name}</PlanName>
                <PlanPrice>
                  <span>{pricingSection.currency}</span>
                  {pricingSection.plan1.price}
                </PlanPrice>
                <PlanText>{pricingSection.plan1.unit}</PlanText>
              </PlanHeader>
              <PlanList>
                {pricingSection.plan1.features.map((feature) => {
                  return (
                    <PlanItem>
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </PlanItem>
                  );
                })}
              </PlanList>
            </Plan>
          )}
          {pricingSection.plan2.included && (
            <Plan>
              <PlanHeader>
                <PlanName>{pricingSection.plan2.name}</PlanName>
                <PlanPrice>
                  <span>{pricingSection.currency}</span>
                  {pricingSection.plan2.price}
                </PlanPrice>
                <PlanText>{pricingSection.plan2.unit}</PlanText>
              </PlanHeader>
              <PlanList>
                {pricingSection.plan2.features.map((feature) => {
                  return (
                    <PlanItem>
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </PlanItem>
                  );
                })}
              </PlanList>
            </Plan>
          )}
          {pricingSection.bestValuePlan && (
            <PlanComplete>
              <PlanHeader>
                <PlanName>{pricingSection.bestValuePlan.name}</PlanName>
                <PlanPrice>
                  <span>{pricingSection.currency}</span>
                  {pricingSection.bestValuePlan.price}
                </PlanPrice>
                <PlanText>{pricingSection.bestValuePlan.unit}</PlanText>
              </PlanHeader>
              <PlanList>
                {pricingSection.bestValuePlan.features.map((feature) => {
                  return (
                    <PlanItem>
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </PlanItem>
                  );
                })}
              </PlanList>
            </PlanComplete>
          )}
        </PricingBox>
        <PricingDetails>{pricingSection.planDetails}</PricingDetails>
      </PricingSection>
    </>
  );
}
