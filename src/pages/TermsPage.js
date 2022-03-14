import MinNavigation from "../components/MinNavigation";
import styled from "styled-components";
import TermsText from "../config/terms";

const TermsSection = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  margin-top: 9.6rem;
`;

const TermsTitle = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.5px;
  font-size: 5.2rem;
  line-height: 1.05;
  margin-bottom: 3.2rem;
`;

export default function TermsPage({ theme, changeTheme }) {
  return (
    <>
      <MinNavigation changeTheme={changeTheme} theme={theme} />
      <TermsSection>
        <TermsTitle>Terms And Conditions</TermsTitle>
        <TermsText />
      </TermsSection>
    </>
  );
}
