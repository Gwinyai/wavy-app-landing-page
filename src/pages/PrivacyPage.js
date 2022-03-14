import MinNavigation from "../components/MinNavigation";
import styled from "styled-components";
import PrivacyPolicyText from "../config/privacyPolicy";

const PrivacySection = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  margin-top: 9.6rem;
`;

const PrivacyTitle = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.5px;
  font-size: 5.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;
`;

export default function PrivacyPage({ theme, changeTheme }) {
  return (
    <>
      <MinNavigation changeTheme={changeTheme} theme={theme} />
      <PrivacySection>
        <PrivacyTitle>Privacy Policy</PrivacyTitle>
        <PrivacyPolicyText />
      </PrivacySection>
    </>
  );
}
